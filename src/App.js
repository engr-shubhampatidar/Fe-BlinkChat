import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/index";
import LoginPage from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Drawer from "./components/Dashboard/OpenDrawer";
import Chat from "./pages/Chat";
import Home from "./pages/Home";
import PrivateRoute from "./services/PrivateRoute";
import { Provider } from "react-redux";
import store from "./services/redux/store";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" element={<LoginPage />} />

            <Route
              path="/dashboard"
              element={<PrivateRoute Component={Dashboard} />}
            />
            <Route path="/Drawer" element={<Drawer />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;