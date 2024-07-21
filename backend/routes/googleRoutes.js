const { callback, createEvent, events, deleteEvent, auth } = require("../controllers/googleControllers");
const { maintainsession } = require("../middlewares/googleMiddleware");

const router = require("express").Router();


router.get("/", maintainsession);
router.get("/auth", auth);
router.get("/auth/callback", callback);
router.post("/createEvent", createEvent);
router.get("/events", events);
router.delete("/events/:eventId", deleteEvent);


module.exports = router;