import React, { useState } from "react";
import "./Signup.css";
import { useNavigate } from "react-router-dom";
import TopBar from "../topBar/topBar";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (formData.firstname.trim() === "") {
      newErrors.firstname = "First Name is required";
    }

    if (formData.lastname.trim() === "") {
      newErrors.lastname = "Last Name is required";
    }

    if (formData.email.trim() === "") {
      newErrors.email = "Email is required";
    }

    if (formData.password.trim() === "") {
      newErrors.password = "Password is required";
    }

    if (formData.cpassword.trim() === "") {
      newErrors.cpassword = "Confirm Password is required";
    } else if (formData.password !== formData.cpassword) {
      newErrors.cpassword = "Passwords do not match";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <TopBar />
      <section className="vh-100 gradient-custom" id="signup">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card bg-dark">
                <div className="card-body p-4 d-flex justify-content-center">
                  <div className="mb-md-3 mt-md-2 pb-2">
                    <h2 className="fw-bold mb-2 text-uppercase text-info">
                      Signin
                    </h2>
                    <p className=" text-info mb-3">Please enter your Details</p>
                    <form onSubmit={handleSubmit} id="form">
                      <div className="form-outline form-white mb-3 input_group">
                        <input
                          type="text"
                          id="firstname"
                          className="form-control form-control-sm"
                          placeholder="First Name"
                          value={formData.firstname}
                          onChange={handleChange}
                        />
                        <div className="error text-danger fs-6 mt-1">
                          {errors.firstname}
                        </div>
                      </div>
                      <div className="form-outline form-white mb-3 input_group">
                        <input
                          type="text"
                          id="lastname"
                          className="form-control form-control-sm"
                          placeholder="Last Name"
                          value={formData.lastname}
                          onChange={handleChange}
                        />
                        <div className="error text-danger fs-6 mt-1">
                          {errors.lastname}
                        </div>
                      </div>
                      <div className="form-outline form-white mb-3 input_group">
                        <input
                          type="email"
                          id="email"
                          className="form-control form-control-sm"
                          placeholder="Email"
                          value={formData.email}
                          onChange={handleChange}
                        />
                        <div className="error text-danger fs-6 mt-1">
                          {errors.email}
                        </div>
                      </div>
                      <div className="form-outline form-white mb-3 input_group">
                        <input
                          type="password"
                          id="password"
                          className="form-control form-control-sm"
                          placeholder="Password"
                          value={formData.password}
                          onChange={handleChange}
                        />
                        <div className="error text-danger fs-6 mt-1">
                          {errors.password}
                        </div>
                      </div>
                      <div className="form-outline form-white mb-3 input_group">
                        <input
                          type="password"
                          id="cpassword"
                          className="form-control form-control-sm"
                          placeholder="Confirm Password"
                          value={formData.cpassword}
                          onChange={handleChange}
                        />
                        <div className="error text-danger fs-6 mt-1">
                          {errors.cpassword}
                        </div>
                      </div>
                      <button
                        className="btn btn-outline-primary btn-sm px-3 button"
                        type="submit"
                      >
                        SignIn
                      </button>
                      <p className="mb-0 text-info">
                        Do you have an account? Login
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
