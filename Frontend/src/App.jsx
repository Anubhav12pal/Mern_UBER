import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

import UserLogin from "./pages/UserLogin";
import UserRegister from "./pages/UserRegister";

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<UserLogin />} />
          <Route path="/register" element={<UserRegister />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
