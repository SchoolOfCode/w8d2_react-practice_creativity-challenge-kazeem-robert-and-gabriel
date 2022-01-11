import "./index.css";
import { useState } from "react";
import List from "../List/index.js";
import Input from "../Input";
import Quote from "../Quote/index.js";

function App() {
  const [todos, setTodos] = useState([]);

  function addItem(item, text) {
    // Don't add the item if there is already one the same that exists
    if (todos.includes(item)) {
      return;
    }
    setTodos([{ todo: item, text: text }, ...todos]);
    console.log(item, text, todos);
  }

  function removeItem(index) {
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  }

  return (
    <div className="App">
      <Input onSubmitClick={addItem} />

      <List items={todos} onItemDeleteClick={removeItem} />
    </div>
  );
}

export default App;
