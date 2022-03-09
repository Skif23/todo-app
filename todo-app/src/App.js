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
    //  FIRST AREA CONTAINING Todo App TEXT
    <div>
      <nav className="navbar">
        <div className="container">
          <div className="todoContainer">Todo App</div>
        </div>
      </nav>
      {/* //  FIRST AREA CONTAINING Todo App TEXT */}

      {/*  SECOND AREA CONTAINING THE ENTER TASK INPUT */}
      <div className="form__group">
        <input
          className="form__input"
          type="text"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          placeholder="Enter Task"
        />
        {/*  SECOND AREA CONTAINING THE ENTER TASK INPUT */}

        
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
    </div>
  );
}

export default App;
