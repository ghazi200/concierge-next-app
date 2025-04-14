import { useEffect, useState } from "react";

export default function ShiftMarketplace() {
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/shifts/open`)
      .then(res => setShifts(res.data))
      .catch(err => console.error("Error loading shifts", err));
  }, []);

  return (
    <div className="screen">
      <h1>Shift Marketplace</h1>
      {shifts.map(shift => (
        <div key={shift.id} className="shift-item">
          <p>{shift.time} - {shift.location}</p>
          <button onClick={() => alert("Shift Accepted")}>Accept Shift</button>
        </div>
      ))}
    </div>
  );
}
