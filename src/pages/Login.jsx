import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub, AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // 👁️ Show/hide state

  const handleLogin = (e) => {
    e.preventDefault();



  };

  const handleGoogleClick = () => {

  };

  return (
    <div className="flex justify-center items-center h-[90vh] bg-base-200">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-primary">Login to Plant Care Tracker</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email Input */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              name="email"
              required
            />
          </div>

          {/* Password Input with Toggle */}
          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              className="input input-bordered w-full pr-10"
              name="password"
              required
            />
            <span
              className="absolute right-3 top-9 cursor-pointer text-xl z-10"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            <span onClick="" className="label-text-alt link link-hover text-xs mt-1">
              Forgot Password?
            </span>
          </div>

          <button type="submit" className="btn btn-primary w-full">
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="divider">OR</div>

{/* Login Buttons */}
        <div className="flex flex-col w-full md:flex-row justify-between items-center gap-4">
          {/* Google Login */}
          <button
            onClick={handleGoogleClick}
            className="w-full md:w-auto btn btn-outline flex items-center justify-center gap-2"
          >
            <FcGoogle className="text-xl" />
            Continue with Google
          </button>
          {/* GitHub */}
          <button className="w-full md:w-auto btn bg-black text-white border-black">
            <AiFillGithub className="text-xl" />
            Login with GitHub
          </button>
        </div>

        {/* Error */}
        {error && <p className="text-red-500 text-center">{error}</p>}

        {/* Register Link */}
        <p className="text-center">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-500 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
