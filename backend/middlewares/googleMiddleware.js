const { google } = require("googleapis");
// const { auth } = require("googleapis/build/src/apis/abusiveexperiencereport");
// const calendar = google.calendar("v3");





const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL
  );
  console.log(process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URL);

module.exports.maintainsession = async (req, res, next) => {
    const tokens = req.session.tokens;
    if (!tokens || !tokens.access_token || !tokens.refresh_token) {
      return res.status(401).json({ error: "OAuth2 tokens not set" });
    }
  
    if (tokens.expiry_date <= Date.now()) {
      try {
        const newAccessToken = await refreshTokens(tokens);
        tokens.access_token = newAccessToken;
        req.session.tokens = tokens;
        oauth2Client.setCredentials(tokens);
        next();
      } catch (error) {
        console.error("Error refreshing tokens:", error);
        res.status(401).json({ error: "Failed to refresh OAuth2 tokens" });
      }
    } else {
      oauth2Client.setCredentials(tokens);
      next();
    }
  };
  