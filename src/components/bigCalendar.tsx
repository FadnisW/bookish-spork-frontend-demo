"use client";

import { Calendar, momentLocalizer, View, Views } from "react-big-calendar";
import moment from "moment";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { useState } from "react";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleOnChangeView}
      defaultDate={new Date(2025, 9, 15)} // Set default date to October 15, 2025
      min={new Date(2025, 9, 0, 7, 0, 0)} // Set min time to 7:00 AM
      max={new Date(2025, 9, 0, 17, 0, 0)} // Set max time to 5:00 PM
    />
  );
};

export default BigCalendar;