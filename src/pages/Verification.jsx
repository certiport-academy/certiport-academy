import { useState, useRef } from "react";
function Verification() {

  const [certificateNumber, setCertificateNumber] = useState("");
  const [membershipNumber, setMembershipNumber] = useState("");
  const [verificationStatus, setVerificationStatus] = useState(null);
  const [showModules, setShowModules] = useState(false);
  const moduleContentRef = useRef(null);

  const handleVerification = () => {

  const certificate = certificateNumber.trim().toUpperCase();
  const membership = membershipNumber.trim().toUpperCase();

  // BOTH FIELDS EMPTY
  if (!certificate && !membership) {
    setVerificationStatus("empty");
    return;
  }

  // VALID CERTIFICATE / MEMBERSHIP
  if (
    certificate === "CA-123456" ||
    certificate === "CERT-2026-AB12CD" ||
    membership === "GR4G-D45G-TGH7-453T"
  ) {
    setVerificationStatus("verified");
    return;
  }

  // INVALID
  setVerificationStatus("invalid");
};

  const handleQrScan = () => {
    setVerificationStatus("qr");
  };

  return (
    <main className="verification-page">

      {/* =================================================
          PAGE HEADER
      ================================================= */}

      <section className="verification-hero">

        <div className="verification-hero-content">

          <span className="verification-label">
            CERTIFICATE VERIFICATION
          </span>

          <h1>
            Verify Your Certificate
          </h1>

          <p>
            Verify the authenticity of your Certiport Academy
            certificate using your certificate number or
            membership number.
          </p>

        </div>

      </section>


      {/* =================================================
          MAIN VERIFICATION AREA
      ================================================= */}

      <section className="verification-main">

        <div className="verification-container">


          {/* ===============================
              LEFT VISUAL
          =============================== */}

          <div className="verification-visual">

            <div className="verification-visual-glow"></div>

            <div className="verification-certificate-card">

              <div className="verification-card-top">
                VERIFIED CERTIFICATE
              </div>

              <div className="verification-card-icon">
                ✓
              </div>

              <h2>
                CERTIFICATE
              </h2>

              <span>
                AUTHENTIC & VERIFIED
              </span>

              <div className="verification-card-line"></div>

              <small>
                Certiport Academy
              </small>

            </div>

          </div>


          {/* ===============================
              RIGHT FORM
          =============================== */}

          <div className="verification-form-card">

            <div className="verification-form-heading">

              <div className="verification-form-icon">
                ✓
              </div>

              <div>
                <h2>
                  Verify Certificate
                </h2>

                <p>
                  Enter any one of the following identifiers
                </p>
              </div>

            </div>


            {/* CERTIFICATE NUMBER */}

            <div className="verification-field">

              <label>
                Certificate Number
              </label>

              <input
  type="text"
  value={certificateNumber}
  onChange={(e) => {
    setCertificateNumber(e.target.value);
    setVerificationStatus(null);
  }}
  placeholder="e.g. CA-123456"
/>

            </div>


            {/* MEMBERSHIP NUMBER */}

            <div className="verification-field">

              <label>
                Membership Number
              </label>

              <input
  type="text"
  value={membershipNumber}
  onChange={(e) => {
    setMembershipNumber(e.target.value);
    setVerificationStatus(null);
  }}
  placeholder="e.g. GR4G-D45G-TGH7-453T"
/>

            </div>


            {/* BUTTONS */}

            <div className="verification-actions">

              <button
                type="button"
                className="verification-button"
                onClick={handleVerification}
              >
                Verify Certificate
                <span>→</span>
              </button>

              <button
  type="button"
  className="verification-qr-button"
  onClick={handleQrScan}
>
  Scan QR Code
</button>

            </div>


            <p className="verification-note">
              Certificates are issued only after successful
              completion and are stored in our official database.
            </p>
            {verificationStatus === "empty" && (
  <div className="verification-result verification-result-warning">

    <div className="verification-result-icon">
      !
    </div>

    <div>
      <strong>Enter Verification Details</strong>

      <p>
        Please enter a certificate number or membership number.
      </p>
    </div>

  </div>
)}





{verificationStatus === "invalid" && (
  <div className="verification-result verification-result-error">

    <div className="verification-result-icon">
      ×
    </div>

    <div>
      <strong>Certificate Not Found</strong>

      <p>
        Please check your certificate or membership number
        and try again.
      </p>
    </div>

  </div>
)}


{verificationStatus === "qr" && (
  <div className="verification-result verification-result-warning">

    <div className="verification-result-icon">
      QR
    </div>

    <div>
      <strong>QR Scanner</strong>

      <p>
        QR code scanning will be connected to the
        certificate verification system.
      </p>
    </div>

  </div>
)}

          </div>
          {verificationStatus === "verified" && (
  <div className="verification-verified-card">

    {/* ===============================
        VERIFICATION HEADER
    =============================== */}

    <div className="verification-verified-header">

      <div className="verification-verified-icon">
        ✓
      </div>

      <div>
        <span>
          VERIFICATION SUCCESSFUL
        </span>

        <h3>
          Certificate Verified
        </h3>

        <p>
          This certificate is authentic and successfully verified.
        </p>
      </div>

    </div>


    {/* ===============================
    STUDENT PROFILE
=============================== */}

<div className="verification-student-profile">

  {/* STUDENT PHOTO */}
  <div className="verification-profile-photo">

    <img
      src="/verification/student-profile.jpg"
      alt="Student Profile"
    />

  </div>


  {/* STUDENT DETAILS */}
  <div className="verification-student-info">

    <span>
      STUDENT
    </span>

    <h4>
      Nidhi Srivastava
    </h4>

    <p>
      Father's Name: Raghuvendra Srivasava
    </p>

  </div>


  {/* PREMIUM VERIFIED BADGE */}

<div className="verification-premium-badge">

  <div className="verification-badge-icon">

  <svg
    className="verification-shield-icon"
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >

    {/* Shield */}
    <path
      d="M32 5L53 13V29C53 43 44.5 54 32 59C19.5 54 11 43 11 29V13L32 5Z"
      fill="url(#shieldGradient)"
      stroke="#D7AA38"
      strokeWidth="2.5"
    />

    {/* Check */}
    <path
      d="M20 32L28 40L45 22"
      stroke="white"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    <defs>
      <linearGradient
        id="shieldGradient"
        x1="12"
        y1="8"
        x2="52"
        y2="58"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#21B875" />
        <stop offset="1" stopColor="#087B4A" />
      </linearGradient>
    </defs>

  </svg>

</div>

  <div className="verification-badge-content">

    <strong>
      VERIFIED
    </strong>

    <span>
      Authentic Certificate
    </span>

  </div>

</div>

</div>



    {/* =================================================
    COURSE + TRAINING CENTER + CERTIFICATE INFORMATION
================================================= */}
<div className="verification-three-column-row">

  {/* COURSE INFORMATION */}
  <div className="verification-info-card verification-course-card">

    <div className="verification-info-card-heading">
      <div className="verification-info-card-icon">🎓</div>

      <div>
        <span>COURSE INFORMATION</span>
        <small>Course details</small>
      </div>
    </div>

    <div className="verification-info-list">

      <div className="verification-info-row">
        <div className="verification-info-row-icon">📖</div>
        <div>
          <span>Course Name</span>
          <strong>ADCA</strong>
        </div>
      </div>

      <div className="verification-info-row">
        <div className="verification-info-row-icon">◷</div>
        <div>
          <span>Course Duration</span>
          <strong>12 Months</strong>
        </div>
      </div>

      <div className="verification-info-row">
        <div className="verification-info-row-icon">📅</div>
        <div>
          <span>Registration Date</span>
          <strong>01 January 2026</strong>
        </div>
      </div>

      <div className="verification-info-row">
        <div className="verification-info-row-icon">🪪</div>
        <div>
          <span>Roll Number</span>
          <strong>123456</strong>
        </div>
      </div>

    </div>
  </div>


  {/* TRAINING CENTER */}
  <div className="verification-info-card verification-training-card">

    <div className="verification-info-card-heading">
      <div className="verification-info-card-icon">🏢</div>

      <div>
        <span>TRAINING CENTER</span>
        <small>Institute details</small>
      </div>
    </div>

    <div className="verification-training-main">

      <div className="verification-training-icon">
        📍
      </div>

      <div>
        <span>Training Center</span>
        <strong>Certiport Academy</strong>
        <p>Bangalore, Bangalore Urban, Karnataka</p>
      </div>

    </div>

    <div className="verification-info-row">
      <div className="verification-info-row-icon">📍</div>

      <div>
        <span>Location</span>
        <strong>Bangalore</strong>
      </div>
    </div>

    <div className="verification-info-row">
      <div className="verification-info-row-icon">🌐</div>

      <div>
        <span>State</span>
        <strong>Karnataka</strong>
      </div>
    </div>

  </div>


  {/* CERTIFICATE INFORMATION */}
  <div className="verification-info-card verification-certificate-card">

    <div className="verification-info-card-heading">
      <div className="verification-info-card-icon">📜</div>

      <div>
        <span>CERTIFICATE INFORMATION</span>
        <small>Certificate details</small>
      </div>
    </div>

    <div className="verification-info-list">

      <div className="verification-info-row">
        <div className="verification-info-row-icon">📜</div>

        <div>
          <span>Certificate Number</span>
          <strong>{certificateNumber || "CA-123456"}</strong>
        </div>
      </div>

      <div className="verification-info-row">
        <div className="verification-info-row-icon">📅</div>

        <div>
          <span>Certificate Issue Date</span>
          <strong>01 September 2026</strong>
        </div>
      </div>

      <div className="verification-info-row">
        <div className="verification-info-row-icon">🏅</div>

        <div>
          <span>Grade</span>
          <strong>A</strong>
        </div>
      </div>

    </div>
  </div>

</div>
    {/* =================================================
    OVERALL PERFORMANCE + MODULE-WISE RESULT
================================================= */}

<div className="verification-performance-module-row">

  {/* OVERALL PERFORMANCE */}
  <div className="verification-performance-card">

    <div className="verification-info-card-heading">

      <div className="verification-info-card-icon">
        📊
      </div>

      <div>
        <span>OVERALL PERFORMANCE</span>
        <small>Academic performance</small>
      </div>

    </div>

    <div className="verification-performance-main">

      <div className="verification-percentage-circle">
        <strong>82%</strong>
        <span>Excellent</span>
      </div>

    </div>

    <div className="verification-performance-summary">

      <div className="verification-performance-box">
        <span>Total Maximum Marks</span>
        <strong>600</strong>
      </div>

      <div className="verification-performance-box">
        <span>Total Obtained Marks</span>
        <strong>492</strong>
      </div>

      <div className="verification-performance-box">
        <span>Overall Percentage</span>
        <strong>82%</strong>
      </div>

    </div>

  </div>


  {/* MODULE-WISE RESULT */}
  <div className="verification-module-card">

    <div className="verification-info-card-heading">

      <div className="verification-info-card-icon">
        📚
      </div>

      <div>
        <span>MODULE-WISE RESULT</span>
        <small>Module examination results</small>
      </div>

    </div>

    <button
      type="button"
      className="verification-module-toggle"
      onClick={() => setShowModules((prev) => !prev)}
    >

      <span className="verification-module-toggle-title">
        EXAM SUMMARY
      </span>

      <span className="verification-module-toggle-action">

        {showModules ? "Hide Result" : "View Result"}

        <span
          className={`verification-module-arrow ${
            showModules ? "open" : ""
          }`}
        >
          ↓
        </span>

      </span>

    </button>


    <div
      ref={moduleContentRef}
      className="verification-module-content"
      style={{
        height: showModules
          ? `${moduleContentRef.current?.scrollHeight || 0}px`
          : "0px",

        opacity: showModules ? 1 : 0,

        marginTop: showModules
          ? "12px"
          : "0px",

        transform: showModules
          ? "translateY(0)"
          : "translateY(-6px)",
      }}
    >

      <div className="verification-module-table-wrap">

        <table className="verification-module-table">

          <thead>
            <tr>
              <th>MODULE NAME</th>
              <th>EXAM MODE</th>
              <th>EXAM DATE</th>
              <th>MAXIMUM MARKS</th>
              <th>OBTINED MARKS</th>
              <th>RESULT</th>
            </tr>
          </thead>

          <tbody>

            <tr>
              <td>Computer Fundamentals</td>
              <td>Online</td>
              <td>15 June 2026</td>
              <td>100</td>
              <td>85</td>
              <td>
                <span className="verification-pass-badge">
                  PASS
                </span>
              </td>
            </tr>

            <tr>
              <td>MS Office</td>
              <td>Online</td>
              <td>18 June 2026</td>
              <td>100</td>
              <td>82</td>
              <td>
                <span className="verification-pass-badge">
                  PASS
                </span>
              </td>
            </tr>

            <tr>
              <td>Internet & Web Technology</td>
              <td>Online</td>
              <td>21 June 2026</td>
              <td>100</td>
              <td>79</td>
              <td>
                <span className="verification-pass-badge">
                  PASS
                </span>
              </td>
            </tr>

            <tr>
              <td>Advanced Excel</td>
              <td>Online</td>
              <td>24 June 2026</td>
              <td>100</td>
              <td>88</td>
              <td>
                <span className="verification-pass-badge">
                  PASS
                </span>
              </td>
            </tr>

            <tr>
              <td>Tally Prime</td>
              <td>Online</td>
              <td>27 June 2026</td>
              <td>100</td>
              <td>80</td>
              <td>
                <span className="verification-pass-badge">
                  PASS
                </span>
              </td>
            </tr>

            <tr>
              <td>Project Work</td>
              <td>Practical</td>
              <td>30 June 2026</td>
              <td>100</td>
              <td>78</td>
              <td>
                <span className="verification-pass-badge">
                  PASS
                </span>
              </td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>

  </div>

</div>


{/* ===============================
    FINAL RESULT
    =============================== */}



    <div className="verification-final-result">

      <span>
        FINAL RESULT
      </span>

      <strong>
        ✓ PASS
      </strong>

    </div>


    {/* AUTHENTIC BADGE */}

    <div className="verification-authentic-badge">
      ✓ AUTHENTIC CERTIFICATE
    </div>

  </div>
)}

        </div>

      </section>


      {/* =================================================
          TRUST FEATURES
      ================================================= */}

      <section className="verification-trust">

        <div className="verification-trust-container">

          <div>
            <strong>✓</strong>
            <span>Secure Verification</span>
          </div>

          <div>
            <strong>★</strong>
            <span>Unique Certificate ID</span>
          </div>

          <div>
            <strong>↗</strong>
            <span>Instant Verification</span>
          </div>

          <div>
            <strong>✓</strong>
            <span>Authentic Certificate</span>
          </div>

        </div>

      </section>

    </main>
  );
}

export default Verification;