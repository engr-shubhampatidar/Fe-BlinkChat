import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/index";
import LoginPage from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import PrivateRoute from "./services/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chats" element={<PrivateRoute Component={Chat}/>} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
