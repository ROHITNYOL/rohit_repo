import { useState, useEffect } from "react";
import styles from "./CreateEvent.module.css";

const Googlecalendar = () => {
  const [events, setEvents] = useState([]);
  const [selectedTimePeriod, setSelectedTimePeriod] = useState("today"); 
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    fetchEvents(selectedTimePeriod);
   
  }, [selectedTimePeriod]);

  useEffect(() => {
    if (refresh) {
      fetchEvents(selectedTimePeriod);
      setRefresh(false);
    } 
  }, [refresh]);

  
  const fetchEvents = async (timePeriod) => {
    try {
      let timeMin, timeMax;

      switch (timePeriod) {
        case "today":
        
          const currentDate = new Date();
          currentDate.setHours(0, 0, 0, 0); 

          timeMin = currentDate.toISOString();

          const todayMax = new Date(currentDate);
          todayMax.setDate(todayMax.getDate() + 1); 
          todayMax.setHours(0, 0, 0, 0); 
          timeMax = todayMax.toISOString();
          break;

        case "tomorrow":
         
          const tomorrowDate = new Date();
          tomorrowDate.setDate(tomorrowDate.getDate() + 1);
          tomorrowDate.setHours(0, 0, 0, 0); 

         
          timeMin = tomorrowDate.toISOString();

        
          const tomorrowMax = new Date(tomorrowDate);
          tomorrowMax.setDate(tomorrowMax.getDate() + 1); 
          tomorrowMax.setHours(0, 0, 0, 0); 
          timeMax = tomorrowMax.toISOString();
          break;

        case "thisweek":
          
          const today = new Date();
          const startOfWeek = new Date(today);
          startOfWeek.setDate(today.getDate() - today.getDay()); 
          startOfWeek.setHours(0, 0, 0, 0); 

          const endOfWeek = new Date(startOfWeek);
          endOfWeek.setDate(endOfWeek.getDate() + 7); 
          endOfWeek.setHours(0, 0, 0, 0); 

        
          timeMin = startOfWeek.toISOString();

         
          timeMax = endOfWeek.toISOString();
          break;

        default:
         
          console.warn(
            "Invalid time period provided. Defaulting to today's events."
          );
          const defaultDate = new Date();
          defaultDate.setHours(0, 0, 0, 0); 
          timeMin = defaultDate.toISOString();
          timeMax = undefined; 
          break;
      }

      const response = await fetch(
        `${
          import.meta.env.VITE_Backend_URL
        }/events?timeMin=${encodeURIComponent(
          timeMin
        )}&timeMax=${encodeURIComponent(timeMax)}`
      );

      if (response.ok) {
        const data = await response.json();
        setEvents(data);
        setSelectedTimePeriod(timePeriod);
      } else {
        console.error("Failed to fetch events:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  
  const handleAddEvent = async (eventData) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_Backend_URL}/createEvent`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventData),
        }
      );
      console.log(JSON.stringify(eventData))
      if (response.ok) {
        setRefresh(true); 
      } else {
        console.error("Failed to add event:", response.statusText);
      }
    } catch (error) {
      console.error("Error adding event:", error);
    }
  };

  
  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_Backend_URL}/events/${eventId}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        console.log("Event deleted successfully!");
        const updatedEvents = events.filter((event) => event.id !== eventId); 
        setEvents(updatedEvents);
      } else {
        console.error("Failed to delete event:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

 
  const renderEvents = () => {
    return (
      <div >
        {events.length > 0 ? (
          events.map((event) => (
            <div key={event.id} className={styles.eventFetched}>
              <p className={styles.pHead}>{event.summary}</p>
              <p className={styles.date}>
                <span className={styles.dateHead}>Start:</span>{" "}
                {new Date(event.start.dateTime).toLocaleString()}
              </p>
              <p className={styles.date}>
                <span className={styles.dateHead}>End:</span>{" "}
                {new Date(event.end.dateTime).toLocaleString()}
              </p>
              {event.description && (
                <p className={styles.description}>{event.description}</p>
              )}
              <button
                onClick={() => handleDeleteEvent(event.id)}
                className={styles.deleteEvent}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No events found.</p>
        )}
      </div>
    );
  };

  return (
    <div className={styles.container1}>
      <div className={styles.formBox}>
        <div className={styles.left}>
          <h2 className={styles.heading}>Create Event</h2>

          <form
            className={styles.form}
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.target);
              const summary = formData.get("summary");
              const description = formData.get("description");
              const start = new Date(formData.get("startDateTime")).toISOString();
              const end = new Date(formData.get("endDateTime")).toISOString();

              handleAddEvent({
                summary,
                description,
                start,
                end,
              });

              e.target.reset(); 
            }}
          >
            <input className={styles.inputBox}
              type="text"
              name="summary"
              placeholder="Event Name"
              required
            />
            <input className={styles.inputBox}
              type="text"
              name="description"
              placeholder="Description"
            />
            <input className={styles.inputBox}
              type="datetime-local"
              name="startDateTime"
              required
            />
            <input className={styles.inputBox}
              type="datetime-local"
              name="endDateTime"
              required
            />
            <button type="submit" className={styles.button}>
              Create Event
            </button>
          </form>
        </div>
        <div className={styles.right}>
          <h2 className={styles.heading}>Details of Events </h2>
      
          <div className={styles.filterBTn}>
            <button
              className={
                selectedTimePeriod === "today" ? "activeButton" : "button"
              }
              onClick={() => fetchEvents("today")}
            >
              Today's Events
            </button>
            <button
              className={
                selectedTimePeriod === "tomorrow" ? "activeButton" : "button"
              }
              onClick={() => fetchEvents("tomorrow")}
            >
              Tomorrow's Events
            </button>
            <button
              className={
                selectedTimePeriod === "thisweek" ? "activeButton" : "button"
              }
              onClick={() => fetchEvents("thisweek")}
            >
              This Week's Events
            </button>
          </div>
          <div  className={styles.event}>
            {events.length > 0 ? (
              renderEvents()
            ) : (
              <p className="noEvents">No events found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Googlecalendar;