import Home from "./components/Home/Home";
import About from "./components/Home/About";
import Contact from "./components/Home/Contact";
import Transactions from "./components/Home/Transactions/Transactions";
import Login from "./components/Userauth/Login";
import Register from "./components/Userauth/Register";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { AuthProvider } from "./contexts/AuthContext";
// import PrivateRoute from "./components/Routes/PrivateRoute";
import ForgotPassword from "./components/Userauth/ForgotPassword";
import "./App.css";

function App() {
  return (
    <Router>
      {/* <AuthProvider> */}
      <Routes>
        <Route
          exact
          path="/"
          element={
            <div className="login_container">
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <Login />
              </div>
              <Footer />
            </div>
          }
        ></Route>
        <Route
          exact
          path="/register"
          element={
            <>
              <div className="signup_container">
                <img
                  className="green_earth"
                  src="./images/Green_earth.png"
                  alt="earth"
                />
                <div className="w-100" style={{ maxWidth: "400px" }}>
                  <Register />
                </div>
                <div className="dustbin_wrapper">
                  <img
                    className="dustbin"
                    src="./images/Dustbin.png"
                    alt="dustbin"
                  />
                </div>
              </div>
              <Footer />
            </>
          }
        ></Route>
        <Route path="/">
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/transactions" element={<Transactions />}></Route>
        </Route>
        <Route
          path="/forgot-password"
          element={
            <div className="login_container">
              <div className="w-100" style={{ maxWidth: "400px" }}>
                <ForgotPassword />
              </div>
              <Footer />
            </div>
          }
        ></Route>
      </Routes>
      {/* </AuthProvider> */}
    </Router>
  );
}

export default App;
