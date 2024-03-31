
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './components/Auth/Register/index';
import Home from "./pages/Home";
import LoginPage from './components/Auth/Login';
import Chat from "./pages/Chat";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/chats" element={<Chat />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
