import axios from "axios";
// import "./App.css";
import HomePage from "./views/HomePage.jsx";
import AddPage from "./views/AddPage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

// const axios = require('axios').default;

const subsList = axios.get("/subscription/")
  .then((response) => {console.log(response)})
  .catch((error) => {console.log(error)})
  .then(() => {console.log('logging get request')})

console.log(subsList);


function App() {

  return (
    <Router>
      <Route path="/" exact component={HomePage} />
      <Route path="/add" component={AddPage} />
    </Router>
  );
}

export default App;
