import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  // setting up for the alert message...
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  // setting up for the dark mode function...
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#232540";
      document.title = "TextUtils App (Dark Mode)";
      showAlert("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.title = "TextUtils App";
      showAlert("Light mode enabled", "success");
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <Routes>
          <Route path="/about" element={<About mode={mode} />} />
          <Route
            path="/"
            element={
              <div className="container mb-5">
                <TextForm
                  showAlert={showAlert}
                  heading="Enter your text here:"
                  mode={mode}
                />
              </div>
            }
          />
        </Routes>

        {/* <About /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
