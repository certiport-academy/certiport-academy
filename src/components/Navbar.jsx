import { Search, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-container">

        <div className="logo logo-flash">
  <img
    src="/logo/certiport-academy-logo.png"
    alt="Certiport Academy"
  />
</div>

        <nav className="nav-links">

          <a href="/">Home</a>
          {/* ================= ABOUT US DROPDOWN ================= */}

<div className="nav-dropdown">

  <button
    type="button"
    className="dropdown-link"
  >
    About Us
    <ChevronDown size={15} />
  </button>

  <div className="dropdown-menu">

    <a href="/about-us/get-to-know-us">
      Get to Know Us
    </a>

    <a href="/about-us/work-with-us">
      Work With Us
    </a>

    <a href="/about-us/our-presence">
      Our Presence
    </a>

  </div>

</div>

          <a href="/courses">Courses</a>

          <a href="/products">Products</a>

          {/* ================= PARTNERS DROPDOWN ================= */}

          <div className="nav-dropdown">

            <button
              type="button"
              className="dropdown-link"
            >
              Partners
              <ChevronDown size={15} />
            </button>

            <div className="dropdown-menu">

              <a href="/partners/partner-with-us">
                Partner With Us
              </a>

              <a href="/partners/locate-a-partner">
                Locate a Partner
              </a>

            </div>

          </div>

          <a href="#students">Students</a>

          <Link to="/verification">Verification</Link>

          
          <a href="/gallery">Gallery</a>

          <a href="#contact">Contact</a>

        </nav>

        <div className="nav-actions">

          <button
            className="search-button"
            aria-label="Search"
          >
            <Search size={21} />
          </button>

          <Link
  to="/login"
  className="login-button"
  style={{
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#1764b0",
    WebkitTextFillColor: "#1764b0",
    textDecoration: "none",
    transition: "all 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#1764b0";
    e.currentTarget.style.borderColor = "#1764b0";
    e.currentTarget.style.color = "#ffffff";
    e.currentTarget.style.webkitTextFillColor = "#ffffff";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 7px 18px rgba(23, 100, 176, 0.20)";

    const text = e.currentTarget.querySelector("span");
    if (text) {
      text.style.color = "#ffffff";
      text.style.webkitTextFillColor = "#ffffff";
    }
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "transparent";
    e.currentTarget.style.borderColor = "transparent";
    e.currentTarget.style.color = "#1764b0";
    e.currentTarget.style.webkitTextFillColor = "#1764b0";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";

    const text = e.currentTarget.querySelector("span");
    if (text) {
      text.style.color = "#1764b0";
      text.style.webkitTextFillColor = "#1764b0";
    }
  }}
>
  <span
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "100%",
      height: "100%",
      color: "#1764b0",
      WebkitTextFillColor: "#1764b0",
      fontWeight: 700,
      lineHeight: 1,
    }}
  >
    Login
  </span>
</Link>

          <Link
  to="/register"
  className="register-button"
  style={{
    backgroundColor: "#1764b0",
    borderColor: "#1764b0",
    color: "#ffffff",
    textDecoration: "none",
    transition: "all 0.2s ease",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = "#0b5fa8";
    e.currentTarget.style.borderColor = "#0b5fa8";
    e.currentTarget.style.color = "#ffffff";
    e.currentTarget.style.transform = "translateY(-2px)";
    e.currentTarget.style.boxShadow =
      "0 7px 18px rgba(23, 100, 176, 0.30)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = "#1764b0";
    e.currentTarget.style.borderColor = "#1764b0";
    e.currentTarget.style.color = "#ffffff";
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "none";
  }}
>
  <span
  style={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "#ffffff",
    WebkitTextFillColor: "#ffffff",
    fontWeight: 700,
    lineHeight: 1,
    textAlign: "center",
  }}
>
  Register
</span>
</Link>

        </div>

      </div>
    </header>
  );
}

export default Navbar;