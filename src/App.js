import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [warningMessage, setWarningMessage] = useState("");

  const handleAddItem = () => {
    if (inputValue.trim() === "") {
      setWarningMessage("Please enter an item.");
    } else {
      setItems([...items, inputValue]);
      setInputValue("");
      setWarningMessage(""); 
    }
  };

  const handleDeleteItem = (index) => {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  };

  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "#f8f9fa", minHeight: "100vh", margin: "0" }}>
      <header style={{ backgroundColor: "#343a40", padding: "10px 20px", color: "white", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ fontWeight: "bold", fontSize: "1.5em", marginRight: "10px", background: "#1cb954", color: "black", padding: "5px 10px", borderRadius: "5px" }}>
          HR
        </div>
        <h1 style={{ color: "#1cb954", margin: 0, textAlign: "center", flexGrow: 1 }}>Item List Manager</h1>
      </header>

      <div style={{ maxWidth: "600px", margin: "40px auto", textAlign: "center", padding: "20px", backgroundColor: "white", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <h2 style={{ marginBottom: "20px", fontSize: "1.5em" }}>Item List</h2>

        {warningMessage && (
          <div style={{ color: "red", marginBottom: "10px" }}>
            {warningMessage}
          </div>
        )}

        <div style={{ marginBottom: "20px" }}>
          <input
            type="text"
            placeholder="Enter item"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{
              padding: "10px",
              width: "96%",
              border: "1px solid #ccc",
              borderRadius: "5px",
              marginBottom: "10px",
            }}
          />
          <button
            onClick={handleAddItem}
            style={{
              width: "100%",
              padding: "15px",
              backgroundColor: "#1cb954",
              color: "white",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              cursor: "pointer",
              fontWeight: "bold",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            }}
          >
            Add Item
          </button>
        </div>

        <ul style={{ listStyleType: "none", padding: "0", marginTop:"50px" }}>
          {items.map((item, index) => (
            <li
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                backgroundColor: "#f1f1f1",
                border: "1px solid #ddd",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            >
              {item}
              <button
                onClick={() => handleDeleteItem(index)}
                style={{
                  padding: "5px 10px",
                  backgroundColor: "#f44336",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
