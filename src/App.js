import { Detail, Checkout, Keranjang, Chat, SearchPage, Home } from "./pages";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <Router>
      <Redirect from="/" to="/home" />
      <Route path="/home" component={Home} />
      <Route path="/detail" component={Detail} />
      <Route path="/checkout" component={Checkout} />
      <Route path="/keranjang" component={Keranjang} />
      <Route path="/chat" component={Chat} />
      <Route path="/search-page" component={SearchPage} />
    </Router>
  );
}

export default App;
