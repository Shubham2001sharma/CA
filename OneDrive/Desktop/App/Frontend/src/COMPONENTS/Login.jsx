/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";

function Login() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      // If token exists, navigate to dashboard
      navigate("/dashboard");
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await axios.post("http://localhost:4000/login", {
        Name,
        Email,
        Password,
      });

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        console.log("Registration successful! Redirecting to dashboard...");
        setTimeout(() => {
          navigate("/dashboard")
        }, 1000);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      console.error("Error during login", error);
      setError("Login failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSuccess = async (credentialResponse) => {
    console.log("Google sign in success:", credentialResponse);

    try {
      const response = await axios.post("http://localhost:4000/google-login", {
        token: credentialResponse.credential,
      });

      if (response.status === 201) {
        localStorage.setItem("token", response.data.token);
        console.log("Google sign in successful! Redirecting to dashboard...");
        navigate("/dashboard")
      }
    } catch (error) {
      console.error("Google sign in error:", error);
      setError("Google sign-in failed. Please try again.");
    }
  };

  const handleGoogleFailure = (error) => {
    console.error("Google sign in failure:", error);
    setError("Google sign-in failed. Please try again.");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-5 sm:px-0">
      <div className="flex bg-white rounded-lg shadow-lg overflow-hidden max-w-sm lg:max-w-4xl w-full">
        <div
          className="hidden md:block lg:w-1/2 bg-cover"
          style={{
            backgroundImage: `url(https://www.tailwindtap.com/assets/components/form/userlogin/login_tailwindtap.jpg)`,
          }}
        ></div>

        <form onSubmit={handleSubmit} className="w-full p-8 lg:w-1/2">
          <h2 className="text-2xl font-semibold text-gray-700 text-center">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-center">Sign in to your account</p>
          {error && <p className="text-red-500 text-center mt-4">{error}</p>}
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="text"
              required
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="email"
              required
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="text-gray-700 border border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:ring-2 focus:ring-blue-600"
              type="password"
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              href="#"
              className="text-xs text-gray-500 hover:text-gray-900 mt-2 block text-right"
            >
              Forgot Password?
            </a>
          </div>
          <div className="mt-8">
            <button
              className="bg-blue-600 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-500 transition-colors duration-300"
              type="submit"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In/Sign Up"}
            </button>
          </div>
          <div className="mt-4 flex items-center justify-center">
            <span className="text-gray-600">or</span>
          </div>
          <div className="flex justify-center mt-4 w-full">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
              
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
