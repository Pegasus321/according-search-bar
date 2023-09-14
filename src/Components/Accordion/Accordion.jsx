import React, { useState } from "react";
import Confirm from "../Confirm/Confirm";
import "./Accordion.css";

export default function Accordion({ user }) {
  const [isOpen, setIsOpen] = useState(false);
  const [editable, setEditable] = useState(true);
  const toggleAccordin = () => {
    setIsOpen(!isOpen);
  };
  const toggleEditable = () => {
    setEditable(!editable);
  };
  return (
    <div className={`accordion ${isOpen ? "open" : "closed"}`}>
      <div className="collapsed" onClick={toggleAccordin}>
        <div className="img-name">
          <img src={user.picture} alt="" className="circular-image" />
          <input value={user.first + " " + user.last} disabled={editable} />
        </div>
        <div className="arrow">{isOpen ? "▼" : "▶"}</div>
      </div>
      <div className="content">
        <div className="dob-gender">
          <p>age</p>
          <p>{user.gender}</p>
          <p>{user.country}</p>
        </div>
        <div className="description">
          <p>{user.description}</p>
        </div>
        <div className="edit-save">
          <button>{editable ? "Save" : "Delete"}</button>
          <button onClick={toggleEditable}>
            {editable ? "cancel" : "edit"}
          </button>
        </div>
      </div>
    </div>
  );
}
