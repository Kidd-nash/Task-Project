import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppOne from "./AppOne";
import AppTwo from "./AppTwo";
import Trials from "./Trials";
import AppTaskAPI from "./AppTaskAPI";

function Home() {
  return (
    <div>
      <Link to="/app1" className="btn btn-primary m-2">App One</Link>
      <Link to="/app2" className="btn btn-secondary m-2">App Two</Link>
      <Link to="/trials" className="btn btn-warning m-2">Trials</Link>
      <Link to="/api-tasks" className="btn btn-primary m-2">API Tasks</Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/app1" element={<AppOne />} />
        <Route path="/app2" element={<AppTwo />} />
        <Route path="/trials" element={<Trials />}/>
        <Route path="/api-tasks" element={<AppTaskAPI />} />
      </Routes>
    </Router>
  );
}

export default App;

