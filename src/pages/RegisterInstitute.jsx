import { useState } from "react";
import "./RegisterInstitute.css";
import indiaLocations from "../data/indiaLocations";

function RegisterInstitute() {
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    instituteName: "",
    directorName: "",
    email: "",
    contactNumber: "",
    state: "",
    district: "",
    city: "",
    pincode: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "state" ? { district: "" } : {}),
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateStep1 = () => {
    const newErrors = {};

    if (!formData.instituteName.trim()) {
      newErrors.instituteName = "Institute Name is required.";
    }

    if (!formData.directorName.trim()) {
      newErrors.directorName = "Director / Head Name is required.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email ID is required.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid Email ID.";
    }

    if (!formData.contactNumber.trim()) {
      newErrors.contactNumber = "Contact Number is required.";
    } else if (!/^[6-9]\d{9}$/.test(formData.contactNumber)) {
      newErrors.contactNumber =
        "Please enter a valid 10 digit mobile number.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors = {};

    if (!formData.state) {
      newErrors.state = "Please select State.";
    }

    if (!formData.district) {
      newErrors.district = "Please select District.";
    }

    if (!formData.city.trim()) {
      newErrors.city = "City is required.";
    }

    if (!formData.pincode.trim()) {
      newErrors.pincode = "Pincode is required.";
    } else if (!/^\d{6}$/.test(formData.pincode)) {
      newErrors.pincode = "Please enter a valid 6 digit Pincode.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleContinue = () => {
    if (currentStep === 1) {
      if (validateStep1()) {
        setCurrentStep(2);
        setErrors({});
      }
      return;
    }

    if (currentStep === 2) {
      if (validateStep2()) {
        setCurrentStep(3);
        setErrors({});
      }
    }
  };

  const goBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      setErrors({});
    }
  };

  return (
    <section className="register-page">

      {/* ================= LEFT SIDE ================= */}

      <div className="register-left">

        <div className="register-left-content">

          <div className="partner-badge">
            PARTNER REGISTRATION
          </div>

          <h1>
            Be a Part of
            <br />
            <span>Certiport Academy</span>
          </h1>

          <p>
            Join our growing network of authorized training partners
            <br />
            and create new opportunities in education.
          </p>

          <div className="partner-benefits">

            <div className="benefit-item">
              <div className="benefit-icon">▦</div>
              <div>
                <h3>Get Authorized</h3>
                <p>Training Partner Status</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">▤</div>
              <div>
                <h3>Access to Industry</h3>
                <p>Relevant Courses</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">↗</div>
              <div>
                <h3>Grow Your Business</h3>
                <p>With Our Brand</p>
              </div>
            </div>

            <div className="benefit-item">
              <div className="benefit-icon">◉</div>
              <div>
                <h3>Dedicated Support</h3>
                <p>& Partner Resources</p>
              </div>
            </div>

          </div>

        </div>

        <div className="register-person">
          <img
            src="/login/student-loginr.png"
            alt="Certiport Academy Partner"
          />
        </div>

        <div className="register-tagline">
          Together for
          <br />
          a Skilled Tomorrow
        </div>

        <div className="empowering-card">

          <div className="empowering-icon">
            ◇
          </div>

          <div>
            <strong>Empowering Institutes</strong>
            <span>to Empower Future Generations</span>
          </div>

        </div>

      </div>


      {/* ================= RIGHT SIDE ================= */}

      <div className="register-right">

        <div className="register-header">

          

          <h2>
            Register <strong>Your Institute</strong>
          </h2>

          <p>
            Fill in the details below to apply for Certiport
            Academy Partner Registration.
          </p>

        </div>


        {/* ================= STEPS ================= */}

        <div className="step-preview">

          <div className={`step ${currentStep >= 1 ? "active" : ""}`}>
            <div>{currentStep > 1 ? "✓" : "1"}</div>
            <span>Basic Details</span>
          </div>

          <div
            className={`step-line ${
              currentStep > 1 ? "completed" : ""
            }`}
          ></div>

          <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <div>{currentStep > 2 ? "✓" : "2"}</div>
            <span>Institute Information</span>
          </div>

          <div
            className={`step-line ${
              currentStep > 2 ? "completed" : ""
            }`}
          ></div>

          <div className={`step ${currentStep >= 3 ? "active" : ""}`}>
            <div>3</div>
            <span>Additional Details</span>
          </div>

          <div className="step-line"></div>

          <div className={`step ${currentStep >= 4 ? "active" : ""}`}>
            <div>4</div>
            <span>Review & Submit</span>
          </div>

        </div>


        {/* ================= STEP 1 ================= */}

        {currentStep === 1 && (
          <div className="basic-details">

            <h3>Basic Details</h3>

            <p>
              Provide your institute's basic contact information.
            </p>

            <div className="form-grid">

              <div className="form-field">
                <label>Institute Name *</label>

                <input
                  type="text"
                  name="instituteName"
                  value={formData.instituteName}
                  onChange={handleChange}
                  placeholder="Enter Institute Name"
                />

                {errors.instituteName && (
                  <small className="form-error">
                    {errors.instituteName}
                  </small>
                )}
              </div>


              <div className="form-field">
                <label>Director / Head Name *</label>

                <input
                  type="text"
                  name="directorName"
                  value={formData.directorName}
                  onChange={handleChange}
                  placeholder="Enter Director Name"
                />

                {errors.directorName && (
                  <small className="form-error">
                    {errors.directorName}
                  </small>
                )}
              </div>


              <div className="form-field">
                <label>Email ID *</label>

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email ID"
                />

                {errors.email && (
                  <small className="form-error">
                    {errors.email}
                  </small>
                )}
              </div>


              <div className="form-field">
                <label>Contact Number *</label>

                <input
                  type="tel"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  maxLength="10"
                  placeholder="Enter 10 digit mobile number"
                />

                {errors.contactNumber && (
                  <small className="form-error">
                    {errors.contactNumber}
                  </small>
                )}
              </div>

            </div>

            <div className="register-form-actions">
              <button
                type="button"
                className="continue-button"
                onClick={handleContinue}
              >
                Continue →
              </button>
            </div>

          </div>
        )}


        {/* ================= STEP 2 ================= */}

        {currentStep === 2 && (
          <div className="basic-details">

            <h3>Institute Information</h3>

            <p>
              Provide your institute's location information.
            </p>

            <div className="form-grid">

              {/* STATE */}

              <div className="form-field">
                <label>State *</label>

                <select
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                >
                  <option value="">
                    Select State
                  </option>

                  {Object.keys(indiaLocations).map((state) => (
                    <option key={state} value={state}>
                      {state}
                    </option>
                  ))}
                </select>

                {errors.state && (
                  <small className="form-error">
                    {errors.state}
                  </small>
                )}
              </div>


              {/* DISTRICT */}

              <div className="form-field">
                <label>District *</label>

                <select
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  disabled={!formData.state}
                >
                  <option value="">
                    {formData.state
                      ? "Select District"
                      : "Select State First"}
                  </option>

                  {formData.state &&
                    indiaLocations[formData.state]?.map(
                      (district) => (
                        <option
                          key={district}
                          value={district}
                        >
                          {district}
                        </option>
                      )
                    )}
                </select>

                {errors.district && (
                  <small className="form-error">
                    {errors.district}
                  </small>
                )}
              </div>


              {/* CITY */}

              <div className="form-field">
                <label>City *</label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  placeholder="Enter City"
                />

                {errors.city && (
                  <small className="form-error">
                    {errors.city}
                  </small>
                )}
              </div>


              {/* PINCODE */}

              <div className="form-field">
                <label>Pincode *</label>

                <input
                  type="text"
                  name="pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  maxLength="6"
                  placeholder="Enter 6 digit Pincode"
                />

                {errors.pincode && (
                  <small className="form-error">
                    {errors.pincode}
                  </small>
                )}
              </div>

            </div>

            <div className="register-form-actions">

              <button
                type="button"
                className="back-step-button"
                onClick={goBack}
              >
                ← Back
              </button>

              <button
                type="button"
                className="continue-button"
                onClick={handleContinue}
              >
                Continue →
              </button>

            </div>

          </div>
        )}


        {/* ================= STEP 3 PLACEHOLDER ================= */}

        {currentStep === 3 && (
          <div className="basic-details">

            <h3>Additional Details</h3>

            <p>
              Additional institute information will be added here.
            </p>

            <div className="register-form-actions">

              <button
                type="button"
                className="back-step-button"
                onClick={goBack}
              >
                ← Back
              </button>

            </div>

          </div>
        )}

      </div>

    </section>
  );
}

export default RegisterInstitute;