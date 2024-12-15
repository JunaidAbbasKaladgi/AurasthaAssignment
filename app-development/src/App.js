import React, { useState } from "react";
import RegistrationForm from "./components/RegistrationForm";
import LoginForm from "./components/LoginForm";
import Dashboard from "./components/Dashboard";

function App() {
  const [currentView, setCurrentView] = useState("login");

  const handleNavigation = (view) => {
    setCurrentView(view);
  };

  const renderView = () => {
    switch (currentView) {
      case "register":
        return <RegistrationForm onNavigate={handleNavigation} />;
      case "dashboard":
        return <Dashboard onNavigate={handleNavigation} />;
      default:
        return <LoginForm onNavigate={handleNavigation} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="w-full max-w-md p-4 bg-white shadow-md rounded-md">
        {renderView()}
      </div>
    </div>
  );
}

export default App;
