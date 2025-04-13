// src/components/ShiftList.js
import React, { useEffect, useState } from "react";
import { getShifts } from "../components/ShiftList"; // Import API function

const ShiftList = () => {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getShifts();
      if (data) {
        setShifts(data);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Shift List</h1>
      {shifts.length > 0 ? (
        <ul>
          {shifts.map((shift) => (
            <li key={shift.id}>{shift.name}</li>
          ))}
        </ul>
      ) : (
        <p>No shifts available.</p>
      )}
    </div>
  );
};

export default ShiftList;
