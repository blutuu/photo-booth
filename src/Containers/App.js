import "./App.css";
import "tachyons";
import "../Sass/Styles.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ResultsPage from "../pages/ResultsPage";
import GalleryPage from "../pages/GalleryPage";
import NotFoundPage from "../pages/NotFoundPage";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="page-body">
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/results" component={ResultsPage} />
            <Route path="/gallery" component={GalleryPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
