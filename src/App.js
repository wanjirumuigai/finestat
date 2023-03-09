import "./App.css";
import Pages from "./components/pages/Pages";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "./components/common/Header";
import Home from "./components/home/Home";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
