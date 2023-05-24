import "./App.css";
import { Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import HomePage from "./page/HomePage";
import About from "./page/About";
import UserDetails from "./page/UserDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
