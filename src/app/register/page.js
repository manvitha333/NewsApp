"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Register = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulating registration process
    setTimeout(() => {
      alert("Registration successful! Redirecting to Sign In...");
      router.push("/signin");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="w-[350px] p-6 bg-black text-white text-center border border-gray-700 rounded-lg shadow-lg">
        {/* News Digest Logo */}
        <div className="mb-4 text-2xl font-bold text-white">News Digest</div>

        {/* Register Heading */}
        <h2 className="text-2xl font-semibold mb-4">Create an account</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Input */}
          <div className="text-left">
            <label className="block text-sm">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          {/* Username Input */}
          <div className="text-left">
            <label className="block text-sm">Username</label>
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          {/* Password Input */}
          <div className="text-left">
            <label className="block text-sm">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 p-2 bg-gray-900 border border-gray-600 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              required
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition"
          >
            Register
          </button>
        </form>

        {/* Back to Sign In */}
        <div className="mt-3">
          <Link href="/signin" className="text-sm text-blue-500 hover:underline">
            Already have an account? Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
