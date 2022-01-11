import React from "react";
import "./index.css"

function ListItem({ text, pr, onDeleteClick }) {
  console.log(pr);
  return (
    <li>
      <div className="li">
        <main><div className="todo">{text}</div>
        <div className="priority"> {pr}</div>
        </main>
        <div className="button-sect">
          <button id="done" onClick={onDeleteClick} className="button">
            Done ✔️
          </button>
        </div>
      </div>
    </li>
  );
}

export default ListItem;
