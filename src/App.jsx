// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import CartList from "./pages/CartList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:listId" element={<CartList />} />
      </Routes>
    </>
  );
}

export default App;
