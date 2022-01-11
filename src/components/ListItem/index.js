import React from "react";

function ListItem({ text, priorityText, onDeleteClick }) {
  return (
    <li>
      {text}
      {priorityText}
      <button id="done" onClick={onDeleteClick}>
        Done ✔️
      </button>
    </li>
  );
}

export default ListItem;
