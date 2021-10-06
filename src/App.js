import { Detail, Checkout, Keranjang, Chat, SearchPage, Home } from "./pages";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
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
