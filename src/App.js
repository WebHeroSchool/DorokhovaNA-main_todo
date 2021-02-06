import logo from './logo.svg';
import './App.css';
const example = 'Прекрасный пример!';
const exampleLogic = true;
const exampleTernary = false;

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p style = {{
          color: 'blue',
          shadowSize: 2,
          fontSize: 55-30
        }}>
          Hello World!!
        </p>
        <p>{example}</p>
        <p>
          {exampleLogic || 'exampleLogic is false'}
        </p>
        <p>
          {exampleTernary ? 'exampleTernary is true' : 'exampleTernary is false'}
          {undefined}
          {null}
          {false}
          {true}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
