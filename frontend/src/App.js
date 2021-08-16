// import "./App.css";
import HomePage from "./views/HomePage.jsx";
import AddPage from "./views/AddPage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {

  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/add" component={AddPage} />
    </Router>
  );
}

export default App;
