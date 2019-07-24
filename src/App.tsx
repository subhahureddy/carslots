import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Employee from "./components/employee/employee";
import Admin from "./components/admin/admin";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  Link
} from "react-router-dom";
import Navbar from "./components/navbar/navbar";
class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <div className="App">
            <Navbar />

            {/* <Route exact path="/" component={Navbar}></Route>  */}
            <Route path="/admin" component={Admin} />
            <Route path="/employee" component={Employee} />
          </div>
        </Router>
      </>
    );
  }
}

export default App;
