import { Route, Switch } from "wouter"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import CallbackLogin from "./services/CallbackLogin"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/callback" component={CallbackLogin} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App
