import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import AppOne from "./AppOne";
import AppTwo from "./AppTwo";

function Home() {
  return (
    <div>
      <Link to="/app1" className="btn btn-primary m-2">App One</Link>
      <Link to="/app2" className="btn btn-secondary m-2">App Two</Link>
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
      </Routes>
    </Router>
  );
}

export default App;

