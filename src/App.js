import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Countries from "./pages/Countries";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/countries" component={Countries} exact />
      </Switch>
    </main>
  );
}

export default App;
