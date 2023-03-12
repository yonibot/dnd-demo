import "./App.css";

const BLOCK_COLORS = ["blue", "red", "", ""];

function App() {
  return (
    <div className="container">
      <div className="drag-list">
        {BLOCK_COLORS.map((color) => (
          <div draggable className={`block ${color}`}></div>
        ))}
      </div>
    </div>
  );
}

export default App;
