import React, { useState } from "react";

import aboutHero from "../assets/about-hero.png";
import academicPerformance from "../assets/academic-performance.png";
import academicPerformance2 from "../assets/academic-performance-2.png";
import academicPerformance3 from "../assets/academic-performance-3.png";
import trophyBackground from "../assets/trophy-background.png";
import trainingLab from "../assets/training-lab.png";



function GetToKnowUs() {

  const [activeTeam, setActiveTeam] = useState("management");
  const [activeAcademicSlide, setActiveAcademicSlide] = useState(0);
  

const academicImages = [
  academicPerformance,
  academicPerformance2,
  academicPerformance3,
];
React.useEffect(() => {
  const timer = setInterval(() => {
    setActiveAcademicSlide((current) =>
      (current + 1) % academicImages.length
    );
  }, 3500);

  return () => clearInterval(timer);
}, []);

  const teamMembers = {
    management: [
      {
        id: 1,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 2,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 3,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 4,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 5,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 6,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 7,
        name: "Management Member",
        designation: "Management Team",
      },
      {
        id: 8,
        name: "Management Member",
        designation: "Management Team",
      },
    ],

    leadership: [
      {
        id: 1,
        name: "Leadership Member",
        designation: "Leadership Team",
      },
      {
        id: 2,
        name: "Leadership Member",
        designation: "Leadership Team",
      },
      {
        id: 3,
        name: "Leadership Member",
        designation: "Leadership Team",
      },
      {
        id: 4,
        name: "Leadership Member",
        designation: "Leadership Team",
      },
    ],
  };

  return (
    <div className="get-to-know-us-page">

      {/* ================= HERO ================= */}

      <section className="gk-hero">

  <img
    src={aboutHero}
    alt="Certiport Academy"
    className="gk-hero-image"
  />

  <div className="gk-container">

    <h1>
      ABOUT CERTIPORT ACADEMY
    </h1>

    <div className="gk-hero-divider"></div>

    <p>
      Certiport Academy is committed to providing professional
      education, certification-focused learning, and quality
      training resources for learners and training institutes.
    </p>

  </div>

</section>


      {/* ================= VALUE OF CERTIFICATION ================= */}

<section className="gk-value-section">

  <div className="gk-container">

    <div className="gk-value-header">

      <div className="gk-value-icon">
  <div className="gk-certificate-symbol">
    <span></span>
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

      <div className="gk-value-content">

        <span className="gk-section-label">
          CERTIFICATION MATTERS
        </span>

        <h2>
          THE VALUE OF CERTIFICATION
        </h2>

        <div className="gk-small-line"></div>

        <p>
          Skills have become an important part of professional
          and academic growth in today's competitive world.
        </p>

        <p>
          Certifications provide a credible way to demonstrate
          knowledge and skills through structured assessment.
        </p>

      </div>

    </div>


    <div className="gk-benefits">

      <h3>
        SOME OF THE KEY BENEFITS OF CERTIFICATION INCLUDE:
      </h3>

      <div className="gk-benefits-grid">

        <ul>

          <li>
            <span className="gk-check">✓</span>
            Validation of knowledge
          </li>

          <li>
            <span className="gk-check">✓</span>
            Increased marketability
          </li>

          <li>
            <span className="gk-check">✓</span>
            Increased earning power
          </li>

          <li>
            <span className="gk-check">✓</span>
            Enhanced academic performance
          </li>

        </ul>


        <ul>

          <li>
            <span className="gk-check">✓</span>
            Improved reputation
          </li>

          <li>
            <span className="gk-check">✓</span>
            Enhanced credibility
          </li>

          <li>
            <span className="gk-check">✓</span>
            Increased confidence
          </li>

          <li>
            <span className="gk-check">✓</span>
            Respect from peers
          </li>

        </ul>

      </div>

    </div>

  </div>

</section>

    {/* ================= ACADEMIC PERFORMANCE ================= */}

<section className="gk-performance-section">

  <div className="gk-performance-pattern"></div>

  <div className="gk-container">

    <div className="gk-performance-content">

      {/* 3D ACADEMIC PERFORMANCE CAROUSEL */}

<div className="gk-performance-image-wrap">

  <div className="gk-performance-glow"></div>

  <div className="gk-performance-3d-carousel">

    {academicImages.map((image, index) => {

      const position =
        (index - activeAcademicSlide + academicImages.length)
        % academicImages.length;

      let slideClass = "gk-performance-slide-hidden";

      if (position === 0) {
        slideClass = "gk-performance-slide-center";
      } else if (position === 1) {
        slideClass = "gk-performance-slide-right";
      } else if (position === 2) {
        slideClass = "gk-performance-slide-left";
      }

      return (
        <div
          key={index}
          className={`gk-performance-slide ${slideClass}`}
        >
          <img
            src={image}
            alt={`Academic Performance ${index + 1}`}
          />
        </div>
      );

    })}

  </div>

  <div className="gk-performance-carousel-dots">

    {academicImages.map((_, index) => (
      <button
        key={index}
        type="button"
        aria-label={`Show image ${index + 1}`}
        className={
          activeAcademicSlide === index ? "active" : ""
        }
        onClick={() => setActiveAcademicSlide(index)}
      />
    ))}

  </div>

</div>


      {/* CONTENT */}

      <div className="gk-performance-text">

        <span className="gk-section-label">
          ACADEMIC SUCCESS
        </span>

        <h2>
          CERTIFICATION CAN IMPROVE
          <br />
          ACADEMIC PERFORMANCE
        </h2>

        <div className="gk-small-line"></div>

        <p className="gk-performance-intro">
          Professional certification can help learners build
          confidence, strengthen practical skills, and create
          a stronger foundation for academic and career growth.
        </p>


        <div className="gk-performance-list">

          <div className="gk-performance-item">
            <span className="gk-performance-check">✓</span>
            <span>
              Higher grade point average for certified high school students
            </span>
          </div>

          <div className="gk-performance-item">
            <span className="gk-performance-check">✓</span>
            <span>
              Higher graduation rates for certified high school students
            </span>
          </div>

          <div className="gk-performance-item">
            <span className="gk-performance-check">✓</span>
            <span>
              Increased post-secondary enrollment
            </span>
          </div>

          <div className="gk-performance-item">
            <span className="gk-performance-check">✓</span>
            <span>
              Reduced dropout rates
            </span>
          </div>

        </div>

      </div>

    </div>

  </div>

</section>


{/* ================= WHY TO CHOOSE US ================= */}

<section className="gk-why-section">

  <div className="gk-container">

    <div className="gk-why-content">

      {/* ================= LEFT CONTENT ================= */}

      <div className="gk-why-text">

        <span className="gk-why-label">
          WHY TO CHOOSE US
        </span>

        <h2>
          Professional Learning
          <br />
          &amp; Certification
        </h2>

        <div className="gk-why-line"></div>

        <p>
          Certiport Academy provides structured learning resources
          and certification-focused training support for students
          and training institutes.
        </p>

        <p>
          We focus on practical learning, professional development,
          and accessible training resources designed to support
          learners throughout their educational journey.
        </p>

        <button
          type="button"
          className="gk-why-button"
        >
          <span>Know More About Us</span>
          <span className="gk-why-arrow">→</span>
        </button>

      </div>


      {/* ================= RIGHT IMAGE ================= */}

      <div className="gk-why-visual">

        <div className="gk-why-image-frame">

          <img
            src={trainingLab}
            alt="Certiport Academy Training Lab"
            className="gk-why-image"
          />


          {/* BLUE OVERLAY */}

          <div className="gk-why-overlay">

            <span className="gk-overlay-label">
              CERTIPORT
            </span>

            <h3>
              ACADEMY
            </h3>

            <div className="gk-overlay-line"></div>

            <p>
              Building skills.
              <br />
              Building careers.
              <br />
              Building futures.
            </p>

          </div>

        </div>

      </div>

    </div>

  </div>

</section>
    {/* ================= WHAT MAKES US CHAMPION ================= */}

<section className="gk-champion-section">

  <div className="gk-champion-wave"></div>

  <div className="gk-container">

    <div className="gk-champion-content">

      {/* LEFT */}
      <div className="gk-champion-heading">

        <span className="gk-champion-label">
          WHY TO CHOOSE US
        </span>

        <h2>
          What Makes Us
          <br />
          Champion?
        </h2>

        <div className="gk-champion-accent"></div>

      </div>


      {/* DIVIDER */}
      <div className="gk-champion-divider"></div>


      {/* RIGHT TEXT */}
      <div className="gk-champion-text">

        <p>
          Certiport Academy focuses on quality learning,
          professional development, and certification-oriented
          training resources.
        </p>

        <div className="gk-champion-text-line"></div>

        <p>
          Our structured approach helps learners and training
          institutes build practical skills and achieve their
          educational goals.
        </p>

      </div>


      {/* TROPHY IMAGE */}
<div className="gk-champion-trophy">

  <div className="gk-trophy-back-effect"></div>

  <img
    src={trophyBackground}
    alt="Certiport Academy Achievement"
    className="gk-champion-trophy-image"
  />

</div>

    </div>


    <div className="gk-champion-mark">
      #CERTIPORT ACADEMY
    </div>

  </div>

</section>
    {/* ================= CORE MANAGEMENT TEAM ================= */}

<section className="gk-management-section">

  <div className="gk-container">

    <div className="gk-management-header">

      <span className="gk-management-label">
        OUR PEOPLE
      </span>

      <h2>
        CORE MANAGEMENT TEAM
      </h2>

      <div className="gk-management-line"></div>

      <p>
        Meet the people who contribute to the management,
        development, and growth of Certiport Academy.
      </p>

    </div>


    {/* ================= MANAGEMENT / LEADERSHIP ================= */}

<div className="gk-team-area">

  <div className="gk-management-tabs">

    <button
      type="button"
      className={`gk-management-tab ${
        activeTeam === "management" ? "active" : ""
      }`}
      onClick={() => setActiveTeam("management")}
    >
      Management
    </button>

    <button
      type="button"
      className={`gk-management-tab ${
        activeTeam === "leadership" ? "active" : ""
      }`}
      onClick={() => setActiveTeam("leadership")}
    >
      Leadership
    </button>

  </div>


  {/* ================= TEAM PROFILES ================= */}

  <div className="gk-team-grid">

    {teamMembers[activeTeam].map((member) => (

      <div
        className="gk-team-card"
        key={member.id}
      >

        <div className="gk-team-photo">

          <div className="gk-team-photo-placeholder">
            TEAM PHOTO
          </div>

        </div>

        <h3>
          {member.name}
        </h3>

        <p>
          {member.designation}
        </p>

      </div>

    ))}

  </div>

</div>

  </div>

</section>



    </div>
  );
}

export default GetToKnowUs;