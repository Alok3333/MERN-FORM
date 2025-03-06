import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";
import styles from "../Login/Login.module.css";
import { FaRegEye } from "react-icons/fa";
import { PiEyeClosedDuotone } from "react-icons/pi";
import { validateEmail } from "../../utils/helper";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pwd: "",
  });
  const [error, setError] = useState(null);
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { username, pwd, email } = formData;

    if (!username) {
      setError("Please enter your name.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (!pwd) {
      setError("Please enter the password.");
      return;
    }

    setError("");

    // SignUp API Call
  };

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "156px",
        }}
      >
        <div
          style={{
            borderRadius: "6px",
            backgroundColor: "white",
            border: "1px solid #ccc",
            padding: "30px 40px",
            color: "black",
          }}
        >
          <form className={styles.formWrapper} onSubmit={handleSubmit}>
            <h1>Welcome To SignUp Page</h1>
            <div style={{ display: "grid", marginBottom: "20px" }}>
              <label htmlFor="eml">Username : </label>
              <input
                type="text"
                id="eml"
                name="username"
                value={formData.username}
                placeholder="Enter Your Username"
                onChange={handleInput}
                className={styles.inputFiled}
              />
            </div>
            <div style={{ display: "grid", marginBottom: "20px" }}>
              <label htmlFor="eml">Email : </label>
              <input
                type="email"
                id="eml"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email"
                onChange={handleInput}
                className={styles.inputFiled}
              />
            </div>
            <div style={{ display: "grid" }}>
              <label htmlFor="pass">Password : </label>
              <div
                style={{
                  borderRadius: "4px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  border: "1px solid #ccc",
                  marginBottom: "20px",
                }}
              >
                <input
                  type={isShowPassword ? "text" : "password"}
                  id="pass"
                  value={formData.pwd}
                  name="pwd"
                  placeholder="Password"
                  onChange={handleInput}
                  className={styles.inputFiledPass}
                />
                {isShowPassword ? (
                  <FaRegEye
                    style={{ marginRight: "14px", cursor: "pointer" }}
                    size={20}
                    onClick={() => toggleShowPassword()}
                  />
                ) : (
                  <PiEyeClosedDuotone
                    style={{ marginRight: "14px", cursor: "pointer" }}
                    size={20}
                    onClick={() => toggleShowPassword()}
                  />
                )}
              </div>
            </div>
            {error && (
              <p style={{ color: "#ff0000", fontSize: "bold" }}>{error}</p>
            )}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <button
                type="submit"
                // onClick={handleSubmit}
                className={styles.logBtn}
              >
                Create Account
              </button>
            </div>

            <p style={{ marginTop: "8px", textAlign: "center" }}>
              Already have an account? {""}
              <Link to="/login" style={{ fontSize: "medium", color: "blue" }}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
