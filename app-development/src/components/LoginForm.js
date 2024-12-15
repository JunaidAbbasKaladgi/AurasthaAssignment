import React, { useState } from "react";

function LoginForm({ onNavigate }) {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = () => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(
      (u) => u.email === formData.email && u.password === formData.password
    );

    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      alert("Login Successful!");
      onNavigate("dashboard");
    } else {
      alert("Invalid Credentials!");
    }
  };

  return (
    <div>
      <h2 className="text-xl font-bold text-center mb-4">Login</h2>
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
        onClick={handleLogin}
        className="w-full bg-green-500 text-white p-2 rounded"
      >
        Login
      </button>
      <button
        onClick={() => onNavigate("register")}
        className="w-full bg-gray-300 text-black p-2 mt-2 rounded"
      >
        Register
      </button>
    </div>
  );
}

export default LoginForm;
