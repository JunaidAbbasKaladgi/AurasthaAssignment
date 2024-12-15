import React, { useState } from "react";

function RegistrationForm({ onNavigate }) {
  const [formData, setFormData] = useState({ username: "", email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration Successful!");
    onNavigate("login");
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Register</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={handleInputChange}
        className="input input-bordered w-full mb-2"
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleInputChange}
        className="input input-bordered w-full mb-2"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleInputChange}
        className="input input-bordered w-full mb-2"
      />
      <button
        onClick={handleRegister}
        className="w-full bg-blue-500 text-white p-2 rounded"
      >
        Register
      </button>
      <button
        onClick={() => onNavigate("login")}
        className="w-full bg-gray-300 text-black p-2 mt-2 rounded"
      >
        Back to Login
      </button>
    </div>
  );
}

export default RegistrationForm;
