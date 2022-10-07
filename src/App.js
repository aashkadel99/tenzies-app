import './style.css';
import Die from "./components/Die"

function App() {
  return (
    <main className="app">
      <div className="dice-container">
        <Die value = "1"/>
        <Die value = "2"/>
        <Die value = "3"/>
        <Die value = "4"/>
        <Die value = "5"/>
        <Die value = "6"/>
        <Die value = "1"/>
        <Die value = "2"/>
        <Die value = "3"/>
        <Die value = "5"/>
      </div>
    </main>
  );
}

export default App;
