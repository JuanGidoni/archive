import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./organisms/Navbar";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Twitch from "./pages/Twitch";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Home />}
        />
        <Route
          exact
          path="/twitch"
          component={() => <Twitch />}
        />
        <Route
          exact
          path="*"
          component={() => <NotFound />}
        />
      </Switch>
    </Router>
  )
}

export default App
