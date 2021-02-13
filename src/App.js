import { Switch, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Wallpaper from "./pages/Wallpaper";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from './globalStyle';
import styled from 'styled-components';

const Section = styled.section`
  overflow: hidden;
`

function App() {
  let location = useLocation();

  return (
    <Section>
      <GlobalStyle />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/wallpaper" component={Wallpaper} />
        </Switch>
      </AnimatePresence>
      </Section>
  );
}

export default App;
