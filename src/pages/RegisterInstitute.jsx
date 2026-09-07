import { useState } from "react";
import "./RegisterInstitute.css";
import indiaLocations from "../data/indiaLocations";

function RegisterInstitute() {
  const [currentStep, setCurrentStep] = useState(1);
   const [isSubmitted, setIsSubmitted] = useState(false);

  const [formData, setFormData] = useState({
  profilePhoto: "",
  instituteName: "",
  directorName: "",
  gender: "",
  contactNumber: "",
  email: "",

  address: "",
  state: "",
  district: "",
  city: "",
  pincode: "",

  instituteType: "",
  establishmentYear: "",
  website: "",
  computerSystems: "",
  instituteExperience: "",
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
    } else if (
  !/^[1-9]\d{5}$/.test(formData.pincode)
) {
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
    if (currentStep === 3) {
  const newErrors = {};

  if (!formData.address.trim()) {
    newErrors.address = "Institute Address is required.";
  }

  if (!formData.instituteType) {
    newErrors.instituteType = "Please select Institute Type.";
  }

  if (!formData.establishmentYear) {
    newErrors.establishmentYear =
      "Please select Year of Establishment.";
  }

  if (!formData.computerSystems) {
    newErrors.computerSystems =
      "Please enter number of computer systems.";
  }

  if (!formData.instituteExperience) {
    newErrors.instituteExperience =
      "Please select Institute Experience.";
  }

  setErrors(newErrors);

  if (Object.keys(newErrors).length === 0) {
    setCurrentStep(4);
    setErrors({});
  }

  return;
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
            <span>Institute Information</span>
          </div>

          <div
            className={`step-line ${
              currentStep > 1 ? "completed" : ""
            }`}
          ></div>

          <div className={`step ${currentStep >= 2 ? "active" : ""}`}>
            <div>{currentStep > 2 ? "✓" : "2"}</div>
            <span>Basic Details</span>
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

    <h3>Institute Information</h3>

    <p>
      Provide your institute's basic information.
    </p>

    <div className="form-grid">
      {/* INSTITUTE NAME */}
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

      {/* PROFILE PHOTO */}
      <div className="profile-photo-upload-box">

  {formData.profilePhoto ? (
    <div className="profile-photo-selected">

      <img
        src={URL.createObjectURL(formData.profilePhoto)}
        alt="Profile Preview"
        className="profile-photo-preview"
      />

      <div className="profile-photo-selected-info">
        <strong>{formData.profilePhoto.name}</strong>

        <span>Profile photo selected</span>

        <div className="profile-photo-actions">

          <label
            htmlFor="profilePhotoInput"
            className="photo-change-button"
          >
            Change Photo
          </label>

          <button
            type="button"
            className="photo-remove-button"
            onClick={() => {
              setFormData((prev) => ({
                ...prev,
                profilePhoto: "",
              }));
            }}
          >
            Remove
          </button>

        </div>
      </div>

    </div>
  ) : (
    <label
      htmlFor="profilePhotoInput"
      className="profile-photo-dropzone"
    >
      <div className="profile-photo-upload-icon">
        📷
      </div>

      <div className="profile-photo-upload-text">
        <strong>Upload Profile Photo</strong>
        <span>JPG or PNG • Optional</span>
      </div>
    </label>
  )}

  <input
    id="profilePhotoInput"
    type="file"
    name="profilePhoto"
    accept="image/jpeg,image/png"
    hidden
    onChange={(e) => {
      const file = e.target.files?.[0];

      if (!file) return;

      setFormData((prev) => ({
        ...prev,
        profilePhoto: file,
      }));

      setErrors((prev) => ({
        ...prev,
        profilePhoto: "",
      }));
    }}
  />

</div>

      

      {/* DIRECTOR / HEAD NAME */}
      <div className="form-field">
        <label>Director / Head Name *</label>

        <input
          type="text"
          name="directorName"
          value={formData.directorName}
          onChange={handleChange}
          placeholder="Enter Director / Head Name"
        />

        {errors.directorName && (
          <small className="form-error">
            {errors.directorName}
          </small>
        )}
      </div>

      {/* GENDER */}
      <div className="form-field">
        <label>Gender</label>

        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>
      </div>

      {/* CONTACT NUMBER */}
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

      {/* EMAIL ADDRESS */}
      <div className="form-field">
        <label>Email Address *</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter Email Address"
        />

        {errors.email && (
          <small className="form-error">
            {errors.email}
          </small>
        )}
      </div>

    </div>

    {/* ACTION BUTTON */}
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

            <h3>Basic Details</h3>

<p>
  Provide your institute's basic address and location information.
</p>

            <div className="form-grid">
              {/* INSTITUTE ADDRESS */}
      <div className="form-field full-width-field">
        <label>Institute Address *</label>

        <textarea
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Enter complete Institute Address"
        />

        {errors.address && (
          <small className="form-error">
            {errors.address}
          </small>
        )}
      </div>

              {/* STATE */}

              <div className="form-field">
                <label>State </label>

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
                <label>District </label>

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
                <label>City </label>

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
                <label>Pincode </label>

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


        {/* ================= STEP 3 ================= */}

{currentStep === 3 && (
  <div className="basic-details">

    <h3>Additional Details</h3>

    <p>
      Provide some additional information about your institute.
    </p>

    <div className="form-grid">

      


      {/* INSTITUTE TYPE */}
      <div className="form-field">
        <label>Institute Type *</label>

        <select
          name="instituteType"
          value={formData.instituteType}
          onChange={handleChange}
        >
          <option value="">Select Institute Type</option>
          <option value="Private">Private</option>
          <option value="Government">Government</option>
          <option value="Other">Other</option>
        </select>

        {errors.instituteType && (
          <small className="form-error">
            {errors.instituteType}
          </small>
        )}
      </div>


      {/* YEAR OF ESTABLISHMENT */}
      <div className="form-field">
        <label>Year of Establishment *</label>

        <select
          name="establishmentYear"
          value={formData.establishmentYear}
          onChange={handleChange}
        >
          <option value="">Select Year</option>

          {Array.from(
            { length: new Date().getFullYear() - 1950 + 1 },
            (_, index) => new Date().getFullYear() - index
          ).map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>

        {errors.establishmentYear && (
          <small className="form-error">
            {errors.establishmentYear}
          </small>
        )}
      </div>


      {/* WEBSITE / SOCIAL PROFILE */}
      <div className="form-field">
        <label>Website / Social Profile</label>

        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
          placeholder="Enter Website or Social Profile"
        />
      </div>


      {/* COMPUTER SYSTEMS */}
      <div className="form-field">
        <label>Total Computer Systems *</label>

        <input
          type="number"
          name="computerSystems"
          value={formData.computerSystems}
          onChange={handleChange}
          min="1"
          placeholder="Enter Number"
        />

        {errors.computerSystems && (
          <small className="form-error">
            {errors.computerSystems}
          </small>
        )}
      </div>


      {/* INSTITUTE EXPERIENCE */}
      <div className="form-field">
        <label>Institute Experience *</label>

        <select
          name="instituteExperience"
          value={formData.instituteExperience}
          onChange={handleChange}
        >
          <option value="">Select Experience</option>
          <option value="New Institute">New Institute</option>
          <option value="1–3 Years">1–3 Years</option>
          <option value="3–5 Years">3–5 Years</option>
          <option value="5+ Years">5+ Years</option>
        </select>

        {errors.instituteExperience && (
          <small className="form-error">
            {errors.instituteExperience}
          </small>
        )}
      </div>

    </div>


    {/* ACTION BUTTONS */}
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
{/* ================= STEP 4 ================= */}

{isSubmitted ? (

  <div className="registration-success">

    <div className="success-icon">
      ✓
    </div>

    <h3>Registration Submitted Successfully!</h3>

    <p>
      Your institute registration has been submitted successfully
      and is currently <strong>Pending Admin Review</strong>.
    </p>

    <div className="application-status-box">
      <span>Application Status</span>
      <strong>🟡 Pending Admin Approval</strong>
    </div>

    <p className="success-info">
      Once your registration is approved by Admin, your institute
      account will be activated and your{" "}
      <strong>Login ID and Password</strong> will be sent to your
      registered email address.
    </p>

    <div className="application-id-box">
      <span>Application ID</span>
      <strong>CA-XXXXXXXX</strong>
    </div>

    <button
      type="button"
      className="continue-button"
      onClick={() => {
        window.location.href = "/";
      }}
    >
      Back to Home
    </button>

  </div>

) : (

  currentStep === 4 && (

    <div className="basic-details review-details">

      <h3>Review & Submit</h3>

      <p>
        Please review your institute information before submitting
        the registration.
      </p>

      {/* ================= INSTITUTE INFORMATION ================= */}

      <div className="review-section">

        <div className="review-section-header">

          <h4>Institute Information</h4>

          <button
            type="button"
            className="review-edit-button"
            onClick={() => setCurrentStep(1)}
          >
            Edit
          </button>

        </div>

        <div className="review-grid">

          <div className="review-item review-full">
            <span>Profile Photo</span>
            <strong>
              {formData.profilePhoto?.name || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Institute Name</span>
            <strong>
              {formData.instituteName || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Director / Head Name</span>
            <strong>
              {formData.directorName || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Gender</span>
            <strong>
              {formData.gender || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Contact Number</span>
            <strong>
              {formData.contactNumber || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Email Address</span>
            <strong>
              {formData.email || "—"}
            </strong>
          </div>

        </div>

      </div>


      {/* ================= BASIC DETAILS ================= */}

      <div className="review-section">

        <div className="review-section-header">

          <h4>Basic Details</h4>

          <button
            type="button"
            className="review-edit-button"
            onClick={() => setCurrentStep(2)}
          >
            Edit
          </button>

        </div>

        <div className="review-grid">

          <div className="review-item review-full">
            <span>Institute Address</span>
            <strong>
              {formData.address || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>State</span>
            <strong>
              {formData.state || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>District</span>
            <strong>
              {formData.district || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>City</span>
            <strong>
              {formData.city || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Pin Code</span>
            <strong>
              {formData.pincode || "—"}
            </strong>
          </div>

        </div>

      </div>


      {/* ================= ADDITIONAL DETAILS ================= */}

      <div className="review-section">

        <div className="review-section-header">

          <h4>Additional Details</h4>

          <button
            type="button"
            className="review-edit-button"
            onClick={() => setCurrentStep(3)}
          >
            Edit
          </button>

        </div>

        <div className="review-grid">

          <div className="review-item">
            <span>Institute Type</span>
            <strong>
              {formData.instituteType || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Year of Establishment</span>
            <strong>
              {formData.establishmentYear || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Website / Social Profile</span>
            <strong>
              {formData.website || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Total Computer Systems</span>
            <strong>
              {formData.computerSystems || "—"}
            </strong>
          </div>

          <div className="review-item">
            <span>Institute Experience</span>
            <strong>
              {formData.instituteExperience || "—"}
            </strong>
          </div>

        </div>

      </div>


      {/* ================= ACTION BUTTONS ================= */}

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
          onClick={() => {
            setIsSubmitted(true);
          }}
        >
          Submit Registration ✓
        </button>

      </div>

    </div>

  )

)}


      </div>

    </section>
  );
}

export default RegisterInstitute;