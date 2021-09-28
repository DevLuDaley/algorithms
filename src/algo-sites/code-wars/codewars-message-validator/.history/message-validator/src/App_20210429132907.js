// import logo from './logo.svg';
import isAValidMessage from './isAValidMessage'
import './App.css';

function App() {

const valid = () => {
  isAValidMessage()
}

  return (
    <div className="App">
      <header className="App-header">
      <button id="btn" onClick={valid}> message validator</button>
      </header>
    </div>
  );
}

export default App;
