import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Log from "./LogIn/Log";
import Sign from "./SignIn/Sign"
import DashBoard from './DashBoard/DashBoard';
function App() {
  return (
    <Router>
    <div className="App">
            <Routes>
              <Route exact path="/" element={<Log />} />
              <Route path="/sign-in" element={<Log />} />
              <Route path="/sign-up" element={<Sign />} />
              <Route path="/dashboard" element={<DashBoard />} />
            </Routes>
        
      </div>
      </Router>
  );
}

export default App;
