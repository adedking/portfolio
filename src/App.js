import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import LoginOne from "./components/authentication/loginPages/LoginOne";
import LoginTwo from "./components/authentication/loginPages/LoginTwo";
import LoginThree from "./components/authentication/loginPages/LoginThree";
import Portfolio from "./components/portfolio//Portfolio";
import BlogHome from './components/blog/BlogHome';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <div className="login-home-buttons">
              <h3>Login Pages Link</h3>
              <Link to="/login-one"><button className="login login-one">Login 1</button></Link>
              <Link to="/login-two"><button className="login login-two">Login 2</button></Link>
              <Link to="/login-three"><button className="login login-three">Login 3</button></Link>
              <Link to="/portfolio"><button className="login login-three">Portfolio</button></Link>
              <Link to="/blog"><button className="login login-three">Blog</button></Link>
            </div>
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/blog">
            <BlogHome />
          </Route>
          <Route exact path="/blog/home">
            <BlogHome />
          </Route>
          <Route exact path="/login-one">
            <LoginOne />
          </Route>
          <Route exact path="/signup">
            <LoginOne />
          </Route>
          <Route exact path="/login-two">
            <LoginTwo />
          </Route>
          <Route exact path="/signup-two">
            <LoginTwo />
          </Route>
          <Route exact path="/login-three">
            <LoginThree />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
