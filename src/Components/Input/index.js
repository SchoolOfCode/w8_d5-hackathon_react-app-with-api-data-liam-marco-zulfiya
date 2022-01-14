import { useState } from "react";

function Input({ displayMovie }) {
  const [text, setText] = useState("");

  function updateText(e) {
    const value = e.target.value;
    setText(value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    displayMovie(text);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={updateText} type="text" />
      <button className="submit-btn">Submit</button>
    </form>
  );
}

export default Input;
