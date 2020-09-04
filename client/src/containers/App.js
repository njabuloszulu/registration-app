import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "../components/NavBar";
import RegistrationForm from "./RegistrationForm";
import StudentList from "../components/StudentList";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Router>
        <Switch>
          <Route
            exact
            path={"/studentList"}
            component={() => <StudentList />}
          />
          <Route
            exact
            path={"/registrationForm"}
            component={() => <RegistrationForm />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
