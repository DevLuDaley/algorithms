// import logo from './logo.svg';
import isAValidMessage from './isAValidMessage'
import './App.css';

function App() {



  return (
    <div className="App">
      <header className="App-header">
      <button id="btn" onClick={isAValidMessage()}> message validator</button>
      </header>
    </div>
  );
}

export default App;
