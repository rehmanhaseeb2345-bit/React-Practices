import React from "react";
import { useParams } from "react-router-dom";
import "./User.css";

function User() {
  const { userid } = useParams();
  return (
    <div className="user-page">
      <div className="user-card">
        <div className="user-avatar">{userid?.[0]?.toUpperCase() ?? "U"}</div>
        <p className="user-label">Viewing Profile</p>
        <h1 className="user-id">{userid}</h1>
        <hr className="user-divider" />
      </div>
    </div>
  );
}

export default User;
