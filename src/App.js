import "./App.css";
import Pages from "./components/pages/Pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/home/Home";
import About from "./components/pages/About";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/portfolio" component={Portfolio} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
