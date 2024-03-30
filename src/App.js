
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LoginPage from './components/Auth/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<LoginPage/>} />
          {/* <Route path="/register" component={Register} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
