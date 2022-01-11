import { useState } from "react";
import "./index.css";

function Input({ onSubmitClick }) {
  const [text, setText] = useState("");
  const [priority, setPriority] = useState();

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick(text,priority);
  }

  function handlePriority(e) {
    setPriority(e.target.value);
  }



  return (
    <form>
      <input onChange={handleChange} />
      <select onChange={handlePriority}>
        <option>Priority</option>
        <option value="priority 1">1</option>
        <option value="priority 2">2</option>
        <option value="priority 3">3</option>
        <option value="priority 4">4</option>
        <option value="priority 5">5</option>
      </select>
      <button onClick={handleSubmit} value={text}>
        ➕Submit Standard Priority Task
      </button>
    </form>
  );
}

export default Input;
