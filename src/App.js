import { Route, Switch } from "wouter"
import ApplicationPage from "./pages/ApplicationPage"
import LoginPage from "./pages/LoginPage"
import NotFoundPage from "./pages/NotFoundPage"
import CallbackLogin from "./services/CallbackLogin"

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={ApplicationPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/callback" component={CallbackLogin} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App
