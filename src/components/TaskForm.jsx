import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (text.trim() === "") {
      return;
    }

    addTask(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Нове завдання..."
      />

      <button type="submit">Додати</button>
    </form>
  );
}
