import React, { useState } from "react";
import "./App.css";

function App() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    if (!newItem) {
      alert("Please insert a item");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="App">
      <h1>Todo App</h1>

      <div className="form__group">
        <input
          className="form__input"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter Task"
        />

        <label for="name" class="form__label">
          Enter Task
        </label>
      </div>

      <button className="addButton" onClick={() => addItem()}>
        Add
      </button>

      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.value}
              <button
                className="deleteButton"
                onClick={() => deleteItem(item.id)}
              >
                ❌
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
