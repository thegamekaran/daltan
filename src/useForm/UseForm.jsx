import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    contactNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName.trim())
      newErrors.firstName = "First Name is required.";
    if (!formData.lastName.trim())
      newErrors.lastName = "Last Name is required.";
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "A valid Email is required.";
    if (!formData.contactNumber.trim() || formData.contactNumber.length < 10)
      newErrors.contactNumber = "Contact Number must be at least 10 digits.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/verification");
      alert("Form submitted successfully!");
      console.log(formData);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h1 style={styles.header}>Enter Your Information</h1>
        <form style={styles.form} onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="firstName">
              First Name <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.firstName && (
              <span style={styles.error}>{errors.firstName}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="middleName">
              Middle Name (Optional)
            </label>
            <input
              type="text"
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              style={styles.input}
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="lastName">
              Last Name <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.lastName && (
              <span style={styles.error}>{errors.lastName}</span>
            )}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="email">
              Email <span style={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.email && <span style={styles.error}>{errors.email}</span>}
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label} htmlFor="contactNumber">
              Primary Contact Number <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              style={styles.input}
            />
            {errors.contactNumber && (
              <span style={styles.error}>{errors.contactNumber}</span>
            )}
          </div>

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#f4f4f4", // Change this to match your desired background
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
  },
  container: {
    width: "450px",
    padding: "30px",
    background: "#ffffff",
    borderRadius: "12px", // Adjust the corner radius
    boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  formGroup: {
    marginBottom: "15px",
  },
  label: {
    fontWeight: "bold",
    marginBottom: "5px",
    display: "block",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  error: {
    color: "#f44336",
    fontSize: "12px",
    marginTop: "5px",
  },
  required: {
    color: "#f44336",
  },
  button: {
    padding: "10px",
    fontSize: "16px",
    color: "white",
    background: "linear-gradient(to right, #ff6f61, #f06292)",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    marginTop: "10px",
  },
};

export default UserForm;
