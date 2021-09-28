// import logo from './logo.svg';
import isAValidMessage from './isAValidMessage'
import './App.css';

function App() {

const valid = () => {
  isAValidMessage('3hey5hi4home')
}

  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label for="id-message">message:</label>
          <input type="text"/>
          <textarea name="" id="" cols="30" rows="10">words</textarea>
          <submit id="btn" onClick={valid}> message validator</submit>
        </form>
      </header>
    </div>
  );
}

export default App;
