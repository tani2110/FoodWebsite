import "./index.css"
import './App.css';
import Home from "./components/screens/Home";
import Login from "./components/screens/Login"
import SignUp from "./components/screens/SignUp"
import {
  BrowserRouter as Router, Routes, Route
} from "react-router-dom";

import '../node_modules/bootstrap-dark-5/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
import { CartProvider } from "./components/contextReducer";
function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/createuser" element={<SignUp />} />

        </Routes>

      </Router>
    </CartProvider>

  );
}

export default App;
