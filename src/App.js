import './App.css';
import dev from "./dev.jpg"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Let's Get Started!</h2>
        <img src={dev} className="dev" />
        <a href="https://github.com/yadavneerajdev">yadavneerajdev</a>
      </header>
    </div>
  );
}

export default App;
