import React from "react";
import ListItem from "../ListItem";
import "./index.css"

function List({ items, onItemDeleteClick }) {
  console.log(items)
  return (
    <ul className="ul">
      {items.map(function (item, index) {
        function deleteItem() {
          onItemDeleteClick(index);
        }
        return <ListItem key={index} text={item.todo}  pr={item.text}onDeleteClick={deleteItem} />;
      })}
    </ul>
  );
}

export default List;
