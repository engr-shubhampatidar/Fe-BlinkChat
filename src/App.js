import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Auth/Register/index";
import LoginPage from "./components/Auth/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Drawer from "./components/Dashboard/ChatHub";
// import Chat from "./pages/Chat";
import Home from "./pages/Home";
import PrivateRoute from "./services/PrivateRoute";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import ImageUpload from "./pages/ImageUpload";

const firebaseConfig = {
  type: "service_account",
  project_id: "blinkchat-00",
  private_key_id: "d4ca51d43b933521f86f855062c4e62a67ff6bc9",
  private_key:
    "TJo:SDFERER\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDM0Kv0smRCiXpn\nAqFjNWm6GjxUFJoN4zubUyRHMn86PU6M2U3RrlU5GQKPvLAqCDro0+HVdJfPVinU\nm5Xzn0vESm6hwAt1sawHfKzdwvD/MhxjR8q+uhOU75jHNH8Cm2g7LpSTKIReuN2S\nk+cFZfekGbSvCalFaOI2x1QDO0Fz3pSKfa9+B8oQNwR5skUksyOT6ZfBC6N82UUQ\nYxmIoWBxSGbYjyj48P+rHG88BvVmlHlS8cDjNSpmhYpldy2zmOmt6P7JB274QCQZ\nGFr/8yEcQwEJfWW8Iweje8uSvc81EOlaVGz4vkCrKJGJTv08ZSMGeKirx8xD36y2\nXhOA2KlPAgMBAAECggEAOeLePr3uhTmqzRNavpnZhF4m39KkybkH3znr3m2AtNqf\n6UH/cvw1HPqbFTnMhkymLai4wqX9w/1DvFGu21iRxuwMgY2wD3cEOmd7yf9vMokc\nqdigDjC0GRtwkBifrwJyPovHNSI16zmPcf54RDfR+mDDhtcRrsraaIYEkhc8w/zK\nU5mq4NhEwag2C69W+KlNmttmjdvu6IA/ls8XhSGHYnYG/tobcZ6hnOQm9KHspEAs\nDjKwHPfa3smYNW1P/qSfcXpB+6rJFrl38u9vhsX2C8A6ihCHThl+JEvQ3IEvcTDM\n1807feicmupyb2EAv5dyUCQOkhU3h8D1UXqPzk+eBQKBgQDyiMdmEMtcKNaE6Nw8\nVop9T1EjT/4T0a5tAdL13DNy3aT7YfrD9sREyYtpZUbcvrewa1J4dtNwI4O8x7UT\n8VUjLklUKhNO/L9brTlLDNttWxdeukHzt8Gch6szHiFxRfcObwFJzS07BVm7ECTi\nUfIHBiVe7VHvOMgNCQC68rzZkwKBgQDYL8cSoEu6UHx/NTYNx+amgC2LI5mgcPxO\nrNF3gH3e0OT1rpvTgSXBC4Q9j7K4flU0Azu2QAC73O6syLo8z0FAeYFPI/v1OhkD\nIKUjjwkRdU2TD5QaJ7IxKrpx9aLpc7ssecix6zGRItNKS8GfkZk1V0Z1j8ahyTw4\niCAitAcW1QKBgA0CDwfHYNDZk9/fCWjnD1h3N5fYQ31Woq9QCLuNCulfP+kHsUZv\nZsl1sdd+ShWu2PVKXEr/vIloLjmi0HB4YiOX6PDtrMlwvuaw3MDMuLwdxZwcC0uC\nEI1PrXv5YrvLj9ujUoNd0M44lD53ODM3R+7egoSb3+gfuIMSd4qPWFenAoGANQej\nQYJokQ9lOp8G32KFxZnzkgntiVmtym7CAxpVxe5f+5QVTVCEvlHg4mj5YiA7LkMM\nxqv0giCzu1aRuJDuZK5pdcxR5dmWgRnk6FAR3WJ04PoVTkUmhMECcynaCIIHC+Xj\nwSD8S6nLQpJKsKW6e0cpVXUrOExwpT1fBKQ8iPECgYEAjdSlesL55GNRlplGI5m+\nvDDRQpkxUbCnUKm8HAfIjr9PBWtgNfm8rm3LRhK0wjvjNjqMa+MlWq4Ogw1z4cC3\nzakv+AIV/pOYreIxrKNqM0bq+vm/DNfToMncZZDn/Zny8HEXmukdWcHF/1kR1C7Q\na/OuVyINpcrtned/Yu0keek=\n-----END PRIVATE KEY-----\n",
  client_email: "firebase-adminsdk-knywx@blinkchat-00.iam.gserviceaccount.com",
  client_id: "116909018100686735571",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  storageBucket: "gs://blinkchat-00.appspot.com",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-knywx%40blinkchat-00.iam.gserviceaccount.com",
  universe_domain: "googleapis.com",
};

function App() {
  firebase.initializeApp(firebaseConfig);

  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/register" exact element={<Register />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/upload/profile" element={<ImageUpload />} />
            {/* <Route path="/chats" element={<PrivateRoute Component={Chat} />} /> */}
            <Route
              path="/dashboard"
              element={<PrivateRoute Component={Dashboard} />}
            />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;
