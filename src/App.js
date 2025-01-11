import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  const [inputValue, setInputValue] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() !== "") { 
      setItems([...items, inputValue]); 
      setInputValue(""); 
    }
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Item List Manager</h1>

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Enter a new item"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            width: "200px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <button
          onClick={handleAddItem}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Add Item
        </button>
      </div>

      <ul style={{ listStyleType: "none", padding: "0" }}>
        {items.map((item, index) => (
          <li
            key={index}
            style={{
              padding: "10px",
              backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#eaeaea",
              border: "1px solid #ddd",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
