import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import CreateBooking from "./routes/CreateBooking";

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/booking" component={CreateBooking} />
      </Switch>
    </BrowserRouter>
  );
}