import React from "react";

function ListItem({ text, onDeleteClick }) {
  return (
    <li>
      {text}
      <button 
      id="done"
      onClick={onDeleteClick}>Done ✔️</button>
    </li>
  );
}

export default ListItem;
