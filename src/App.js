
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" exact element={<Home />} />
          {/* <Route path="/login" component={Login} /> */}
          {/* <Route path="/register" component={Register} /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
