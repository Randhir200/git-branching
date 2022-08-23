import "./App.css";
import AllRouts from "./components/AllRouts";
import Navbar from "./components/Navbar";
// import {Routes} from 're'

function App() {
  const baseUrl = process.env.REACT_APP_BASE_URL;
  return (
    <div className="App">
      <h1>Base Url : {baseUrl} </h1>
      <Navbar />
      <AllRouts />
    </div>
  );
}

export default App;
