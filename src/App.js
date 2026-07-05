
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react'
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [Mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const toggleMode = () => {
    if (Mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = `#1E1E1E `;
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils';
    }

    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils';
    }
  }
return (
  <>
    <Router>
      <div className={Mode === "dark" ? "dark-mode" : "light-mode"}>
        <Navbar title="TextUtils" Mode={Mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <div className="container-fluid">
          <Routes>
            <Route path="/about" element={<About />} />

            <Route
              path="/"
              element={
                <Textform
                  heading="Try Textutils - Word Counter,Character Counter,Remove extra spaces"
                  Mode={Mode}
                  showAlert={showAlert}
                />
              }
            />
          </Routes>
        </div>

      </div> 
    </Router>

    
  </>
);
}

export default App;