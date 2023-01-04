import React, { Suspense, lazy, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import "../../static/css/App.css";
import Login from "./auth/Login";
import Main from "./Main";
import Register from "./auth/Register";

export default class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </Suspense>
        </Router>
      </>
    );
  }
}

const appDiv = document.getElementById("app");
render(<App />, appDiv);
