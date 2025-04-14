// pages/index.js
import Link from "next/link";

export default function Home() {
  return (
    <div style={{ padding: 20 }}>
      <h2>Home Screen</h2>
      <ul>
        <li><Link href="/call-supervisor">Call Supervisor</Link></li>
        <li><Link href="/schedule-view">Schedule View</Link></li>
        <li><Link href="/chatbot">Chatbot</Link></li>
        <li><Link href="/shift-marketplace">Shift Marketplace</Link></li>
      </ul>
    </div>
  );
}
