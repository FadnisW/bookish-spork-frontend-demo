"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState, useEffect } from "react";

const localizer = momentLocalizer(moment);

// Custom CSS to improve mobile responsiveness
import "./calendar-responsive.css";

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile devices and adjust view accordingly
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial value
    handleResize();
    
    // Add event listener
    window.addEventListener("resize", handleResize);
    
    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Automatically switch to day view on mobile
  useEffect(() => {
    if (isMobile) {
      setView(Views.DAY);
    }
  }, [isMobile]);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="calendar-container">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={isMobile ? ["day", "work_week"] : [ "work_week", "day"]}
        view={view}
        style={{ height: "100%" }}
        onView={handleOnChangeView}
        defaultDate={new Date(2025, 9, 15)} // Set default date to October 15, 2025
        min={new Date(2025, 9, 0, 7, 0, 0)} // Set min time to 7:00 AM
        max={new Date(2025, 9, 0, 17, 0, 0)} // Set max time to 5:00 PM
        toolbar={true}
        className="responsive-calendar"
      />
    </div>
  );
};

export default BigCalendar;