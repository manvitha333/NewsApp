"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Signin = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulating authentication (You can replace this with actual authentication logic)
    if (formData.email && formData.password) {
      localStorage.setItem("isAuthenticated", "true"); // ✅ Store authentication status
      router.push("/"); // ✅ Redirect to home page
    } else {
      alert("Please enter valid credentials!"); // ✅ Simple validation message
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-[350px] p-6 bg-black text-white text-center border border-gray-700 rounded-lg shadow-lg">
        {/* Logo */}
        <div className="mb-4 text-2xl font-bold text-white">News Digest</div>

        {/* Sign In Heading */}
        <h2 className="text-2xl font-semibold mb-4 underline">Sign in</h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="text-left">
            <label className="block text-sm">Email or Username</label>
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="text-left">
            <label className="block text-sm">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full mt-1 p-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-500"
                required
              />
              <span
                className="absolute right-3 top-3 text-sm cursor-pointer text-blue-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"} password
              </span>
            </div>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            Sign in
          </button>
        </form>

        {/* Forgot Password */}
        <div className="mt-3">
          <Link href="/forgot-password" className="text-sm text-blue-500 hover:underline">
            Need help signing in?
          </Link>
        </div>

        {/* Register Section */}
        <hr className="border-gray-600 my-5" />
        <p className="text-sm">Don't have a News Digest account?</p>
        <Link href="/register" className="text-blue-500 hover:underline font-semibold">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Signin;
