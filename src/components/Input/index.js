import { useState, useEffect } from "react";
import "./index.css";

function Input({ onSubmitClick }) {
  const [text, setText] = useState("");
  const [priorityText, setPriorityText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
    setPriorityText(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick(text);
  }

  // useEffect(()=>{

  // }[priorityText])

  function toUpperCase(text) {
    return text.toUpperCase();
  }

  return (
    <form>
      <input onChange={handleChange} />
      <button id="standardpriority" onClick={handleSubmit} value={text}>
        ➕Submit Standard Priority Task
      </button>
      <button id="highpriority" onClick={handleSubmit} value={priorityText}>
        ➕➕Submit High Priority Task
      </button>
    </form>
  );
}

export default Input;
