import Add from "./Components/Add";
import List from "./Components/List";
import logo from "./Images/falcon.svg"


function App() {
  return (
    <div className="container">
      <img src={logo} className="logo" alt="Falcon.io logo" />
      <Add />
      <List />
      <span className="credit">
        Falcon.io homework by Balint Apro
      </span>
    </div>
  );
}

export default App;
