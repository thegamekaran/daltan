// App.jsx
import React from "react";
import "./VerifyPage.css";

const VerifyPage = () => {
  return (
    <div className="container">
      <div className="verification-box">
        <h1 className="title">Verify Your Code</h1>
        <p className="subtitle">
          Enter the code you just received on your mobile number ending with{" "}
          <span className="masked-number">*******456</span>.
        </p>
        <div className="code-input">
          <input type="text" maxLength="1" className="digit" />
          <input type="text" maxLength="1" className="digit" />
          <input type="text" maxLength="1" className="digit" />
          <input type="text" maxLength="1" className="digit" />
          <input type="text" maxLength="1" className="digit" />
          <input type="text" maxLength="1" className="digit" />
        </div>
        <button className="verify-button">Verify Now</button>
      </div>
    </div>
  );
};

export default VerifyPage;
