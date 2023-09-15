import React from "react";
import "./Confirm.css";

export default function Confirm({ cancel, onDelete }) {
  return (
    <div className="box">
      <div className="outer-box">
        <div className="inner-container">
          <p>Are you sure you want to Delete?</p>
          <button className="x" onClick={cancel}>
            X
          </button>
        </div>
        <div className="buttons">
          <button className="cancel" onClick={cancel}>
            Cancel
          </button>
          <button className="delete" onClick={onDelete}>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
