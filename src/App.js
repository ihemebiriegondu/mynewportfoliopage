import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Navigations from "./components/navigations";



function App() {

  return (
    <Router>
      <Navigations />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Router >
  );
}

export default App;
