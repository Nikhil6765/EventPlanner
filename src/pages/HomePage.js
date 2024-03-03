import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Event Organizer App</h1>
      <div>
        {" "}
        <button
          onClick={() => {
            navigate("/app");
          }}
        >
          Organize an Event
        </button>
      </div>
      <br />
      <div>
        {" "}
        <button
          onClick={() => {
            navigate("/app");
          }}
        >
          Browse Events
        </button>
      </div>
    </div>
  );
}

export default HomePage;
