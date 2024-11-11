
import React, { useState,useEffect } from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

import {CustomButton} from "../../components/button/Button";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormValid, setIsFormValid] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
     setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const { name, email } = formData;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if(name && emailPattern.test(email)){
      setIsFormValid(true)
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      localStorage.setItem('items', JSON.stringify(formData));
      navigate("/post");
    }
  };

  useEffect(() => {
    validateForm();
  }, [formData]);

  return (
    <Container maxWidth="sm">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            style={{ padding: "10px", marginBottom: "10px", width: "300px" }}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleInputChange}
            style={{ padding: "10px", marginBottom: "10px", width: "300px" }}
          />
        </div>
        <div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleInputChange}
            style={{
              padding: "10px",
              marginBottom: "10px",
              width: "300px",
              height: "150px",
            }}
          />
        </div>
        <CustomButton
          type="submit"
          color="primary"
          size="large"
          disabled={!isFormValid}
          handleClick={handleSubmit}
        >
          Submit
        </CustomButton>
      </form>
    </Container>
  );
};

