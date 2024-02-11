import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Form />
      <ParkingList />
      <Stats />
    </div>
  );
}

function Header() {
  return (
    <div>
      <h1>💼far away🌴</h1>
    </div>
  );
}

function Form() {
  return (
    <form>
      <h3>WHat do you want to pack for this trip</h3>
      <select>
        <option>1</option>
      </select>
      <input />
      <button>add</button>
    </form>
  );
}

function ParkingList() {
  return (
    <div>
      <ul>
        <Items />
      </ul>
    </div>
  );
}

function Items() {
  return <li></li>;
}

function Stats() {
  return <p>You have picked X% of this items</p>;
}
export default App;
