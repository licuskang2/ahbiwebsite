import logo from './logo.svg';
import './App.css';
import ahbiLogo from './ahbi.JPG'; 
import dajieLogo from './dajie.jpg'; 
import xxLogo from './xx.png'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={ahbiLogo} className="App-logo" alt="logo" /> */}
        <img src={xxLogo} className="App-logo" alt="logo" />
        <img src={dajieLogo} className="App-logo" alt="logo" />

        <p>
          Hello World! I'm Ah bi :D
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
