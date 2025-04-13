// pages/index.js
import Link from "next/link";
import styles from "../styles/globals.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.buttonContainer}>
        <Link href="/call-supervisor" className={styles.btn}>Call Supervisor</Link>
        <Link href="/callout" className={styles.btn}>Callout</Link>
        <Link href="/schedule-view" className={styles.btn}>Schedule View</Link>
        <Link href="/chatbot" className={styles.btn}>Chatbot</Link>
        <Link href="/shift-marketplace" className={styles.btn}>Shift Marketplace</Link>
      </div>
    </div>
  );
}

// pages/call-supervisor.js
export default function CallSupervisor() {
  return (
    <div className="screen">
      <h1>Call Supervisor</h1>
    </div>
  );
}

// pages/callout.js
export default function Callout() {
  return (
    <div className="screen">
      <h1>Callout</h1>
    </div>
  );
}

// pages/schedule-view.js
export default function ScheduleView() {
  return (
    <div className="screen">
      <h1>Schedule View</h1>
    </div>
  );
}

// pages/chatbot.js
export default function Chatbot() {
  return (
    <div className="screen">
      <h1>Chatbot</h1>
    </div>
  );
}

// pages/shift-marketplace.js
import { useEffect, useState } from "react";
import axios from "axios";

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

// styles/globals.module.css
.homeContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: url("/background.jpg") no-repeat center center fixed;
  background-size: cover;
}

.buttonContainer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.btn {
  padding: 1rem 2rem;
  background-color: #0070f3;
  color: white;
  text-align: center;
  border: none;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.2rem;
  transition: background 0.3s;
}

.btn:hover {
  background-color: #005bb5;
}

.screen {
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.9);
  margin: 2rem;
  border-radius: 10px;
}

.shift-item {
  padding: 1rem;
  border-bottom: 1px solid #ccc;
}
