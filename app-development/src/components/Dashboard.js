import React, { useState } from "react";

function Dashboard({ onNavigate }) {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [profileData, setProfileData] = useState(currentUser || {});

  const handleInputChange = (e) => {
    setProfileData({ ...profileData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const updatedUsers = users.map((user) =>
      user.email === profileData.email ? profileData : user
    );
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    localStorage.setItem("currentUser", JSON.stringify(profileData));
    alert("Profile Updated!");
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    onNavigate("login");
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Dashboard</h2>
      <input
        type="text"
        name="username"
        value={profileData.username}
        onChange={handleInputChange}
        className="input input-bordered w-full mb-2"
      />
      <input
        type="email"
        name="email"
        value={profileData.email}
        readOnly
        className="input input-bordered w-full mb-2"
      />
      <input
        type="password"
        name="password"
        value={profileData.password}
        onChange={handleInputChange}
        className="input input-bordered w-full mb-2"
      />
      <button
        onClick={handleSave}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Save Changes
      </button>
      <button
        onClick={handleLogout}
        className="w-full bg-red-500 text-white p-2 mt-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Dashboard;
