import Header from "./components/header/Header";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./page/HomePage";
import About from "./page/About";
import User from "./page/User";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/user:id" element={<User />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
