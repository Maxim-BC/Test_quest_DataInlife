import "./App.css";
import MainPage from "./page/MainPage/MainPage";

import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">Test quest</header>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route path="/product-sections/:id">
          <MainPage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
