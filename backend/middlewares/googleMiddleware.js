const { google } = require("googleapis");
const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
const calendar = google.calendar("v3");//defininng the version of the google calendar




// Initialize OAuth2 client
const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );
  console.log(process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL);
// Middleware to check OAuth2 tokens
module.exports.maintainsession = async (req, res, next) => {//eventhough this middle ware is not used in any function whenever these sessions work they automatically initialise this middleware
    const tokens = req.session.tokens;
    if (!tokens || !tokens.access_token || !tokens.refresh_token) {
      return res.status(401).json({ error: "OAuth2 tokens not set" });
    }
  
    if (tokens.expiry_date <= Date.now()) {//we send the refresh token whenever the session is expired
      try {
        const newAccessToken = await refreshTokens(tokens);
        tokens.access_token = newAccessToken;//replacing the access token with the new one
        req.session.tokens = tokens;//updating the new tokens
        oauth2Client.setCredentials(tokens);//reinitialising so session continues being logged in
        next();//continues the next function
      } catch (error) {
        console.error("Error refreshing tokens:", error);
        res.status(401).json({ error: "Failed to refresh OAuth2 tokens" });
      }
    } else {
      oauth2Client.setCredentials(tokens);//or else continue with the old tokens only
      next();
    }
  };
  