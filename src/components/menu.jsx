import React from "react";
import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Task">Task list</Link>
        </li>
        <li>
          <Link to="/AboutUs">About us</Link>
        </li>
        <li>
          <Link to="/MainTask">Main Task</Link>
        </li>
      </ul>
    </nav>
  );
}
