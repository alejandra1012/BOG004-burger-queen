import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Ordens } from "./components/Ordens";
import { Error } from "./components/Error";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Register" element={<Register />} />
          <Route path="/Login" element={<Login />} />
          <Route path="Ordens" element={<Ordens />} />
          <Route path="Error" element={<Error />} />
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
