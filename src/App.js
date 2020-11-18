import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./redux/store";
import HomePage from "./Components/pages/HomePage";
import PokemonPage from "./Components/pages/PokemonPage";
import TypesPage from "./Components/pages/TypesPage";
import Header from "./Components/layouts/Header";
import Footer from "./Components/layouts/Footer";
import NotFound from "./Components/pages/NotFound";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/pokemon/:name" component={PokemonPage} />
            <Route path="/types/:type" component={TypesPage} />
            <Route component={NotFound} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
