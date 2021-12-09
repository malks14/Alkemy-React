import { useContext } from "react";

import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HeroesDetailPage from "./pages/HeroesDetailPage";
import SearchPage from "./pages/SearchPage";
import LoginPage from "./pages/LoginPage";
import AuthContext from "./store/auth-context";
import LandingPage from "./pages/LandingPage";
import HomePage from "./pages/HomePage";
import HeroProvider from "./store/HeroProvider";

function App() {
  const authCtx = useContext(AuthContext);
  return (
    <div className="App">
      <HeroProvider>
        <Layout>
          <Switch>
            <Route path="/" exact>
              <LandingPage />
            </Route>
            <Route path="/heroes/:heroId">
              <HeroesDetailPage />
            </Route>
            <Route path="/search">
              {authCtx.isLoggedIn && <SearchPage />}
              {!authCtx.isLoggedIn && <Redirect to="login" />}
            </Route>
            <Route path="/home">
              {authCtx.isLoggedIn && <HomePage />}
              {!authCtx.isLoggedIn && <Redirect to="login" />}
            </Route>
            {!authCtx.isLoggedIn && (
              <Route path="/login">
                <LoginPage />
              </Route>
            )}
            <Route path="*">
              <Redirect to="/" />
            </Route>
          </Switch>
        </Layout>
      </HeroProvider>
    </div>
  );
}

export default App;
