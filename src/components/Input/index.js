import { useState, useEffect } from "react";
import "./index.css";

function Input({ onSubmitClick }) {
  const [text, setText] = useState("");

  function handleChange(event) {
    setText(event.target.value);
  }

  function handleSubmit(event) {
    // Stop the page from refreshing as the form will try and submit and refresh by default
    event.preventDefault();
    onSubmitClick(text);
  }

  return (
    <form>
      <input onChange={handleChange} />
      <button 
      id="standardpriority"
      onClick={handleSubmit} value={text}>
        Submit Standard Priority Task
      </button>
      <button
        id="highpriority"
        onClick={handleSubmit}
        value={text.toUpperCase()}
      >
        Submit High Priority Task
      </button>
    </form>
  );
}

export default Input;
