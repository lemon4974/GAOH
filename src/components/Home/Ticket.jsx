import React from "react";
import { Link } from "react-router-dom";
import "../../styles/home/ticket.scss";

export default function Ticket() {
  return (
    <div className="ticket-div">
      <Link to="films">
        <div className="ticket">Search for Movies</div>
      </Link>
    </div>
  );
}
