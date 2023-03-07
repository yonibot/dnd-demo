import './App.css';

const Button = (props) => {
  return <div className={`button ${props.color}`} {...props}></div>
}

const Placeholder = () => {
  return (
    <div className="placeholder">
      <span>Here's a good spot!</span>
    </div>
  )
}

function App() {
  return (
    <div className="container">
      <div className="drag-list">
        <Button draggable color="blue" />
        <Button draggable color="red" />
        <Button />
        <Placeholder />
      </div>
    </div>
  );
}

export default App;
