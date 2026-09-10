import {
  Search,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="nav-container">

        {/* ================= LOGO ================= */}

        <div className="logo logo-flash">
          <img
            src="/logo/certiport-academy-logo.png"
            alt="Certiport Academy"
          />
        </div>


        {/* ================= DESKTOP NAVIGATION ================= */}

        <nav className="nav-links">

          <a href="/">Home</a>


          {/* ================= ABOUT US ================= */}

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


          {/* ================= COURSES ================= */}

          <a href="/courses">
            Courses
          </a>


          {/* ================= PRODUCTS ================= */}

          <a href="/products">
            Products
          </a>


          {/* ================= PARTNERS ================= */}

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


          {/* ================= OTHER LINKS ================= */}

          <a href="#students">
            Students
          </a>

          <Link to="/verification">
            Verification
          </Link>

          <a href="/gallery">
            Gallery
          </a>

          <a href="#contact">
            Contact
          </a>

        </nav>


        {/* =====================================================
            MOBILE MENU TOGGLE
        ===================================================== */}

        <button
          type="button"
          className="mobile-menu-toggle"
          aria-label={
            mobileMenuOpen
              ? "Close navigation menu"
              : "Open navigation menu"
          }
          onClick={() =>
            setMobileMenuOpen(!mobileMenuOpen)
          }
        >
          {mobileMenuOpen ? (
            <X size={24} />
          ) : (
            <Menu size={24} />
          )}
        </button>


        {/* =====================================================
            DESKTOP SEARCH / LOGIN / REGISTER
        ===================================================== */}

        <div className="nav-actions">

          {/* SEARCH */}

          <button
            className="search-button"
            aria-label="Search"
          >
            <Search size={21} />
          </button>


          {/* LOGIN */}

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

              e.currentTarget.style.backgroundColor =
                "#1764b0";

              e.currentTarget.style.borderColor =
                "#1764b0";

              e.currentTarget.style.color =
                "#ffffff";

              e.currentTarget.style.webkitTextFillColor =
                "#ffffff";

              e.currentTarget.style.transform =
                "translateY(-2px)";

              e.currentTarget.style.boxShadow =
                "0 7px 18px rgba(23, 100, 176, 0.20)";

              const text =
                e.currentTarget.querySelector("span");

              if (text) {
                text.style.color = "#ffffff";
                text.style.webkitTextFillColor =
                  "#ffffff";
              }

            }}
            onMouseLeave={(e) => {

              e.currentTarget.style.backgroundColor =
                "transparent";

              e.currentTarget.style.borderColor =
                "transparent";

              e.currentTarget.style.color =
                "#1764b0";

              e.currentTarget.style.webkitTextFillColor =
                "#1764b0";

              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.boxShadow =
                "none";

              const text =
                e.currentTarget.querySelector("span");

              if (text) {
                text.style.color = "#1764b0";
                text.style.webkitTextFillColor =
                  "#1764b0";
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


          {/* REGISTER */}

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

              e.currentTarget.style.backgroundColor =
                "#0b5fa8";

              e.currentTarget.style.borderColor =
                "#0b5fa8";

              e.currentTarget.style.color =
                "#ffffff";

              e.currentTarget.style.transform =
                "translateY(-2px)";

              e.currentTarget.style.boxShadow =
                "0 7px 18px rgba(23, 100, 176, 0.30)";

            }}
            onMouseLeave={(e) => {

              e.currentTarget.style.backgroundColor =
                "#1764b0";

              e.currentTarget.style.borderColor =
                "#1764b0";

              e.currentTarget.style.color =
                "#ffffff";

              e.currentTarget.style.transform =
                "translateY(0)";

              e.currentTarget.style.boxShadow =
                "none";

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


        {/* =====================================================
            MOBILE MENU
        ===================================================== */}

        {mobileMenuOpen && (
          <div className="mobile-menu">

            {/* HOME */}

            <Link
              to="/"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Home
            </Link>


            {/* ABOUT US */}

            <div className="mobile-menu-section">

              <div className="mobile-menu-title">
                About Us
                <ChevronDown size={15} />
              </div>

              <Link
                to="/about-us/get-to-know-us"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Get to Know Us
              </Link>

              <Link
                to="/about-us/work-with-us"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Work With Us
              </Link>

              <Link
                to="/about-us/our-presence"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Our Presence
              </Link>

            </div>


            {/* COURSES */}

            <Link
              to="/courses"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Courses
            </Link>


            {/* PRODUCTS */}

            <Link
              to="/products"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Products
            </Link>


            {/* PARTNERS */}

            <div className="mobile-menu-section">

              <div className="mobile-menu-title">
                Partners
                <ChevronDown size={15} />
              </div>

              <Link
                to="/partners/partner-with-us"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Partner With Us
              </Link>

              <Link
                to="/partners/locate-a-partner"
                onClick={() =>
                  setMobileMenuOpen(false)
                }
              >
                Locate a Partner
              </Link>

            </div>


            {/* STUDENTS */}

            <a
              href="#students"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Students
            </a>


            {/* VERIFICATION */}

            <Link
              to="/verification"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Verification
            </Link>


            {/* GALLERY */}

            <Link
              to="/gallery"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Gallery
            </Link>


            {/* CONTACT */}

            <a
              href="#contact"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Contact
            </a>
                        {/* LOGIN */}

            <Link
              to="/login"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Login
            </Link>


            {/* REGISTER */}

            <Link
              to="/register"
              onClick={() =>
                setMobileMenuOpen(false)
              }
            >
              Register
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}

export default Navbar;