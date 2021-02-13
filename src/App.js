import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Wallpaper from "./pages/Wallpaper";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from './globalStyle';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <AnimatePresence>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/wallpaper" component={Wallpaper} />
        </Switch>
      </AnimatePresence>
    </Router>
  );
}

export default App;
