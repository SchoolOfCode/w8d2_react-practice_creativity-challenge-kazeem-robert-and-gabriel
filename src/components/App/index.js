import "./index.css";
import { useState, useEffect } from "react";
import List from "../List/index.js";
import Input from "../Input";
import Quote from "../Quote/index.js";

function App() {
  const [todos, setTodos] = useState([]);

  function addItem(item) {
    // Don't add the item if there is already one the same that exists
    if (todos.includes(item)) {
      return;
    }
    setTodos([...todos, item]);
  }

  function removeItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Input onSubmitClick={addItem} />
      <Quote />
      <List items={todos} onItemDeleteClick={removeItem} />
    </div>
  );
}

export default App;
