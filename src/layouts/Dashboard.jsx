import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <nav>
        <Link to="/">Launch</Link>
        <Link to="/upcoming">Upcoming</Link>
        <Link to="/history">History</Link>
      </nav>
      <Outlet />
    </div>
  );
}
