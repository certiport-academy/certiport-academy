import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [loginType, setLoginType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [resetSent, setResetSent] = useState(false);

  return (
    <section className="login-page">
      <div className="login-container">

        {/* LEFT SIDE */}
        <div className="login-visual">
            <div className="login-student-visual">
  <img
    src="/login/student-login.png"
    alt="Certiport Academy Student"
  />
</div>

          <div className="login-brand">
            <div className="login-brand-mark">C</div>

            <div>
              <h1>Certiport</h1>
              <h2>Academy</h2>
              <span>Learn • Practice • Certify • Succeed</span>
            </div>
          </div>

          <div className="login-copy">
            <h3>
              Empowering Education,
              <br />
              Inspiring Futures
            </h3>

            <p>
              Certiport Academy is your trusted partner in
              skill development and career growth. Learn
              anytime, anywhere and get certified.
            </p>
          </div>

          <div className="login-benefits">

            <div className="login-benefit">
              <div className="login-benefit-icon">🎓</div>

              <div>
                <strong>Industry Recognized Courses</strong>
                <span>
                  Learn from expert-designed courses aligned
                  with <br></br>industry standards.
                </span>
              </div>
            </div>

            <div className="login-benefit">
              <div className="login-benefit-icon">📜</div>

              <div>
                <strong>Certification & Recognition</strong>
                <span>
                  Get recognized certificates that boost your
                  career.
                </span>
              </div>
            </div>

            <div className="login-benefit">
              <div className="login-benefit-icon">📊</div>

              <div>
                <strong>Smart Learning Platform</strong>
                <span>
                  Access interactive learning, practice tests
                  and track your progress.
                </span>
              </div>
            </div>

          </div>

          <div className="login-secure-card">
            <div className="login-secure-icon">🛡️</div>

            <div>
              <strong>Secure • Reliable • Trusted</strong>
              <span>
                Your information is protected with
                secure technology.
              </span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="login-form-area">

          <Link to="/" className="login-back-home">
  ← Back to Home
</Link>

          <div className="login-form-content">

            <div className="login-heading">
  <span>
    {loginType === "student"
      ? "Student Login 👋"
      : "Institute Login 👋"}
  </span>

  <p>
    {loginType === "student"
      ? "Login to access your student dashboard"
      : "Login to access your institute dashboard"}
  </p>
</div>

            {/* LOGIN TYPE */}
            <div className="login-type-switch">

              <button
                type="button"
                className={
                  loginType === "student"
                    ? "active"
                    : ""
                }
                onClick={() => setLoginType("student")}
              >
                🎓 Student
              </button>

              <button
                type="button"
                className={
                  loginType === "institute"
                    ? "active"
                    : ""
                }
                onClick={() => setLoginType("institute")}
              >
                🏫 Institute
              </button>

            </div>

            {/* USER ID */}
            <div className="login-input-group">
              <span>✉</span>

              <input
  type="text"
  placeholder={
    loginType === "student"
      ? "Student User ID / Email"
      : "Institute User ID / Email"
  }
/>
            </div>

            {/* PASSWORD */}
            <div className="login-input-group">
              <span>🔒</span>

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />

              <button
                type="button"
                className="login-password-toggle"
                onClick={() =>
                  setShowPassword(!showPassword)
                }
              >
                {showPassword ? "◉" : "◌"}
              </button>
            </div>

            {/* OPTIONS */}
            <div className="login-options">

              <label>
                <input type="checkbox" />
                <span>Remember me</span>
              </label>

              <button
                type="button"
                className="login-forgot"
                onClick={() => setShowForgotPassword(true)}
              >
                Forgot Password?
              </button>

            </div>

            {/* LOGIN BUTTON */}
            <button
  type="button"
  className="login-submit"
>
  <span>
    {loginType === "student"
      ? "Student Login"
      : "Institute Login"}
  </span>

  <strong>→</strong>
</button>
            {/* CREATE ACCOUNT */}

<div className="login-create-account">

  <div className="login-divider">
    <span></span>
    <strong>or</strong>
    <span></span>
  </div>

  <div className="login-register-row">

    <span>New here?</span>

    <button
      type="button"
      className="login-create-button"
    >
      Create an Account
    </button>

  </div>

</div>
{/* FORGOT PASSWORD PANEL */}
{showForgotPassword && (
  <div className="login-forgot-panel">

    {resetSent ? (
      <div className="login-reset-success">

        <div className="login-reset-success-icon">
          ✓
        </div>

        <strong>Reset Request Sent</strong>

        <span>
          Your password reset request has been submitted successfully.
        </span>

        <button
          type="button"
          onClick={() => {
            setResetSent(false);
            setShowForgotPassword(false);
          }}
        >
          Back to Login
        </button>

      </div>
    ) : (
      <>
        <div className="login-forgot-header">

          <div>
            <strong>Reset Password</strong>

            <span>
              Enter your registered User ID / Email
            </span>
          </div>

          <button
            type="button"
            className="login-forgot-close"
            onClick={() => {
              setShowForgotPassword(false);
              setResetSent(false);
            }}
          >
            ×
          </button>

        </div>

        <div className="login-input-group">

          <span>✉</span>

          <input
            type="text"
            placeholder={
              loginType === "student"
                ? "Student User ID / Email"
                : "Institute User ID / Email"
            }
          />

        </div>

        <button
          type="button"
          className="login-reset-button"
          onClick={() => setResetSent(true)}
        >
          <span>Send Reset Request</span>
          <strong>→</strong>
        </button>

      </>
    )}

  </div>
)}

            {/* SECURITY */}
            <div className="login-bottom-security">

              <div className="login-bottom-icon">
                🔒
              </div>

              <div>
                <strong>Secure & Encrypted Login</strong>
                <span>
                  Your information is safe with us.
                </span>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default LoginPage;