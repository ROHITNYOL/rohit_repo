// const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
const { google } = require("googleapis");
const calendar = google.calendar("v3");


const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );
  console.log(process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL);

async function refreshTokens(tokens) {
    const refreshToken = tokens.refresh_token;
    const { credentials } = await oauth2Client.refreshToken(refreshToken);
    const newAccessToken = credentials.access_token;
    const newExpiryDate = credentials.expiry_date;
    tokens.access_token = newAccessToken;
    tokens.expiry_date = newExpiryDate;
    return newAccessToken;
  }
  
  

  module.exports.auth = (req, res) => {
    const authUrl = oauth2Client.generateAuthUrl({
      access_type: "offline",
      scope: ["https://www.googleapis.com/auth/calendar"],
    });
    res.redirect(authUrl);
  };
  
  module.exports.callback = async (req, res) => {
    const code = req.query.code;
    try {
      const { tokens } = await oauth2Client.getToken(code);
      oauth2Client.setCredentials(tokens);
      req.session.tokens = tokens;
      res.redirect(process.env.Front_endURL);
    } catch (error) {
      console.error("Error handling OAuth2 redirect:", error);
      res.status(500).send("Error handling OAuth2 redirect");
    }
  };
  module.exports.createEvent = async (req, res) => {
    try {
      const { summary, description, start, end } = req.body;
      console.log(req.body)
      if (!summary || !description || !start || !end) {
        return res.status(400).json({ error: "Missing required fields" });
      }
  
      const event = {
        summary: summary,
        description: description,
        start: {
          dateTime: start,
          timeZone: "Asia/Kolkata",
        },
        end: {
          dateTime: end,
          timeZone: "Asia/Kolkata",
        },
      };
  
      console.log("Creating event with body:", event);
  
      const response = await calendar.events.insert({
        auth: oauth2Client,
        calendarId: "primary",
        requestBody: event,
      });
  
      const createdEvent = response.data;
      console.log("Event created:", createdEvent);
  
      res.status(200).json({ message: "Event added successfully", event: createdEvent });
    } catch (error) {
      console.error("Error creating event:", error);
      res.status(500).json({ error: "Failed to create event" });
    }
  };

  module.exports.events  = async (req, res) => {
    try {
      const { timeMin, timeMax } = req.query;
      const response = await calendar.events.list({
        auth: oauth2Client,
        calendarId: "primary",
        timeMin: timeMin || new Date().toISOString(),
        timeMax: timeMax || undefined,
        maxResults: 10,
        singleEvents: true,
        orderBy: "startTime",
      });
  
      const events = response.data.items;
      res.status(200).json(events);
    } catch (error) {
      console.error("Error fetching events:", error);
      res.status(500).json({ error: "Failed to fetch events" });
    }
  };
  
  module.exports.deleteEvent = async (req, res) => {
    const eventId = req.params.eventId;
  
    try {
      await calendar.events.delete({
        auth:oauth2Client,
        calendarId: "primary",
        eventId: eventId,
      });
      res.status(204).send();
    } catch (error) {
      console.error("Error deleting event:", error);
      res.status(500).json({ error: "Failed to delete event" });
    }
  };
  