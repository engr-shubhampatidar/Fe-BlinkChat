
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {Home } from './pages/Home';
import Register from './components/Auth/Register';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          {/* <Route path="/login" component={<Login/>} /> */}
          <Route path="/register" exact element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
