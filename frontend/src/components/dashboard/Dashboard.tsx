import React, { useState, useEffect } from "react";
import "../../assets/styles/dashboard.css";

const Dashboard: React.FC = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="dashboard">
      <div className="title-bar">
        <div className="nav-menu">
          <select>
            <option value="home">Home</option>
            <option value="profile">Profile</option>
            <option value="settings">Settings</option>
          </select>
        </div>
        <div className="title">Gryphon</div>
        <div className="clock">
          <span>{formatDate(currentTime)}</span>
          <span>{formatTime(currentTime)}</span>
        </div>
      </div>
      <div className="content">
        {/* Other components will be displayed here */}
      </div>
    </div>
  );
};

export default Dashboard;
