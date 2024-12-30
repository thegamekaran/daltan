import React, { useState } from "react";
import "./VerifyPage.css";
import { useNavigate } from "react-router-dom";

const VerifyPage = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState(Array(6).fill(""));

  const handleChange = (value, index) => {
    const updatedCode = [...code];
    updatedCode[index] = value;
    setCode(updatedCode);

    if (value && index < code.length - 1) {
      document.getElementById(`digit-${index + 1}`).focus();
    }
  };

  const handleVerify = () => {
    if (code.every((digit) => digit.trim() !== "")) {
      navigate("/");
    } else {
      alert("Please Enter the OTP.");
    }
  };

  return (
    <div className="container verify_sec">
      <div className="verification-box">
        <h1 className="title">Verify Your Code</h1>
        <p className="subtitle">
          Enter the code you just received on your mobile number ending with{" "}
          <span className="masked-number">*******456</span>.
        </p>
        <div className="code-input">
          {code.map((digit, index) => (
            <input
              key={index}
              id={`digit-${index}`}
              type="text"
              maxLength="1"
              className="digit"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
            />
          ))}
        </div>
        <button onClick={handleVerify} type="button" className="verify-button">
          Verify Now
        </button>
      </div>
    </div>
  );
};

export default VerifyPage;
