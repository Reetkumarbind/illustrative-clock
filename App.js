import React, { useState, useEffect } from "react";

import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (<div className="clock-container">

<h1 className="welcome-message">REET KUMAR BIND </h1>
<h1 className="clock-name"> Good Morning </h1>

         
      <div className="clock">

        
        <div
          className="hour-hand"
          style={{
            transform: `rotate(${
              (time.getHours() % 12) * 30 + time.getMinutes() / 2
            }deg)`,
          }}
        ></div>
        <div
          className="minute-hand"
          style={{ transform: `rotate(${time.getMinutes() * 6}deg)` }}
        ></div>
        <div
          className="second-hand"
          style={{ transform: `rotate(${time.getSeconds() * 6}deg)` }}
        ></div>
        <div className="center"></div>
      </div>
    </div>
  );
}

export default App;
