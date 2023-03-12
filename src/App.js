import "./App.css";
import { useState } from "react";

const BLOCK_COLORS = ["blue", "red", "", ""];

function ConditionalBlock({ color }) {
  const [inDragOver, setInDragOver] = useState(false);

  if (color) return <div draggable className={`block ${color}`}></div>;

  function handleDragOver(e) {
    e.preventDefault();
    setInDragOver(true)
  }

  return (
    <div
      className={`block placeholder ${inDragOver ? 'drag-over' : ''}`}
      onDragOver={handleDragOver}
    />
  )
}

function App() {
  return (
    <div className="container">
      <div className="drag-list">
        {BLOCK_COLORS.map((color) => (
          <ConditionalBlock color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
