// src/pages/schedule.js
import React from "react";
import ShiftList from "../src/components/ShiftList";

const SchedulePage = () => {
  return (
    <div>
      <h1>Schedule</h1>
      <ShiftList /> {/* Calls getShifts() */}
    </div>
  );
};

export default SchedulePage;
