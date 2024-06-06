/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function DashBoard() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/");
    }
  }, [navigate]);

  const clearToken = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <h1>DASHBOARD</h1>
      <button onClick={clearToken}>LOGOUT</button>
    </>
  );
}

export default DashBoard;
