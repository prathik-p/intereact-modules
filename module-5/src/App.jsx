import "./App.css";
import Display from "./components/Display";
// import Header from "./components/Header";
// import HelloWorld from "./components/HelloWorld";
// import Paragraph from "./components/Paragraph";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ErrorPage from "./pages/ErrorPage";
import UserPage from "./pages/UserPage";
import SettingsPage from "./pages/SettingsPage";
import { useState } from "react";

function App() {
  let [user, setUser] = useState("John");

  return (
    <>
      {/* <Header />
      <HelloWorld />
      <div className="random-class">
        <Header />
      </div>
      <HelloWorld />
      <Paragraph />
      <Paragraph /> */}
      {/* <Display /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<HomePage user={user} setUser={setUser} />}
          />
          <Route path="/about" element={<AboutPage user={user} />} />
          <Route path="/user" element={<UserPage />}>
            <Route path="settings" element={<SettingsPage />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

// /user/settings
