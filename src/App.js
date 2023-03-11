import { useState } from "react";
import "./App.css";

const ConditionalBlock = ({ color }) => {
  const [isDropZone, setIsDropZone] = useState(false);

  if (color) return <div draggable className={`button ${color}`}></div>;

  return (
    <div
      className={`placeholder ${isDropZone ? "in-hover" : ""}`}
      onDragEnter={() => setIsDropZone(true)}
      onDragLeave={() => setIsDropZone(false)}
    ></div>
  );
};

const INITIAL_SETUP = ["blue", "red", "", ""];

function App() {
  let [blockList] = useState(INITIAL_SETUP);

  return (
    <div className="container">
      <div className="drag-list">
        {blockList.map((color) => (
          <ConditionalBlock color={color} />
        ))}
      </div>
    </div>
  );
}

export default App;
