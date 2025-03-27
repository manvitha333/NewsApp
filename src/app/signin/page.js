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
    
    if (formData.email && formData.password) {
      localStorage.setItem("isAuthenticated", "true");
      router.push("/");
    } else {
      alert("Please enter valid credentials!");
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
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email or Username"
            aria-label="Email or Username"
            className="w-full p-2 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
            required
          />

          {/* Password Input */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              aria-label="Password"
              className="w-full p-2 bg-gray-900 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring focus:border-blue-500"
              required
            />
            {/* Show/Hide Password Button (Accessible) */}
            <button
              type="button"
              className="absolute right-3 top-3 text-sm text-blue-500 hover:underline focus:outline-none"
              onClick={() => setShowPassword(!showPassword)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setShowPassword(!showPassword);
                }
              }}
            >
              {showPassword ? "Hide" : "Show"} password
            </button>
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
        <p className="text-sm">Don&apos;t have a News Digest account?</p>
        <Link href="/register" className="text-blue-500 hover:underline font-semibold">
          Register now
        </Link>
      </div>
    </div>
  );
};

export default Signin;
