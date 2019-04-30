import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};
const NavBar = () => {
  return (
    <div>
      <NavLink to="/" exact style={link} activeStyle={{ background: "darkblue" }}>
        Home
      </NavLink>
      <NavLink to="/about" exact style={link} activeStyle={{ background: "darkblue" }}>
        About
      </NavLink>
      <NavLink to="/login" exact style={link} activeStyle={{ background: "darkblue" }}>
        Login
      </NavLink>
    </div>
  );
};
const Home = () => {
  return (
    <div>
      <h1>Home!</h1>
    </div>
  );
};

const About = () => {
  return (
    <div>
      <h1>Component Time</h1>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <form>
        <div>This app uses the honor system</div>
      </form>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <React.Fragment>
      <NavBar />
      <Route exact path="/" render={Home} />
      <Route exact path="/about" render={About} />
      <Route exact path="/login" render={Login} />
    </React.Fragment>
  </Router>,
  document.getElementById("root"),
);
