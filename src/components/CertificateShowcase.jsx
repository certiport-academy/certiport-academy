import { useEffect, useState } from "react";

function CertificateShowcase() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      id: 0,
      image: "/verified/verified-certificates.png",
      title: "ADCA — Diploma",
      certificateId: "CA-VER-9F2A1K",
    },
    {
      id: 1,
      image: "/verified/verified-certificates01.png",
      title: "Tally Champion",
      certificateId: "CA-VER-7K4B2P",
    },
    {
      id: 2,
      image: "/verified/verified-certificates02.png",
      title: "DFA — Diploma",
      certificateId: "CA-VER-5M8C3X",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [slides.length]);

  const getPosition = (index) => {
    const difference =
      (index - activeSlide + slides.length) % slides.length;

    if (difference === 0) return "center";
    if (difference === 1) return "right";

    return "left";
  };

  return (
    <section
      className="certificate-hero"
      id="verified-certificates"
    >
      <div className="certificate-hero-container">

        {/* =================================================
            LEFT — 3D IMAGE CAROUSEL
            ================================================= */}

        <div className="certificate-hero-visual">

          <div className="certificate-hero-stage">

            {slides.map((slide, index) => {
              const position = getPosition(index);

              return (
                <div
                  key={slide.id}
                  className={`certificate-hero-card certificate-hero-${position}`}
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                  />

                  {position === "center" && (
                    <div className="certificate-hero-center-overlay">

                      <div className="certificate-hero-check">
                        ✓
                      </div>

                      <div className="certificate-hero-info">

                        <div className="certificate-hero-info-text">
                          <span>CERTIFIED</span>

                          <strong>
                            {slide.title}
                          </strong>

                          <small>
                            ID: {slide.certificateId}
                          </small>
                        </div>

                        <div className="certificate-hero-gold">
                          ★
                        </div>

                      </div>

                    </div>
                  )}

                </div>
              );
            })}

          </div>

          {/* SLIDER DOTS */}

          <div className="certificate-hero-dots">

            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                className={
                  activeSlide === index
                    ? "certificate-hero-dot active"
                    : "certificate-hero-dot"
                }
                onClick={() => setActiveSlide(index)}
                aria-label={`Show ${slide.title}`}
              />
            ))}

          </div>

        </div>


        {/* =================================================
            RIGHT — CONTENT
            ================================================= */}

        <div className="certificate-hero-content">

          <span className="certificate-hero-label">
            ✦ Verified Achievements
          </span>

          <h2>
            Verified Certificates
          </h2>

          <p className="certificate-hero-description">
            Earn a verified certificate after successful
            completion of your course and assessment. Our
            certificates are designed to validate your skills
            and knowledge.
          </p>


          {/* FEATURE 01 */}

          <div className="certificate-hero-feature">

            <div className="certificate-hero-feature-icon">
              ✓
            </div>

            <div className="certificate-hero-feature-content">

              <h3>
                Digitally Verified
              </h3>

              <p>
                All certificates are digitally verified for
                authenticity and security.
              </p>

            </div>

          </div>


          {/* FEATURE 02 */}

          <div className="certificate-hero-feature">

            <div className="certificate-hero-feature-icon">
              ★
            </div>

            <div className="certificate-hero-feature-content">

              <h3>
                Unique Certificate ID
              </h3>

              <p>
                Every certificate has a unique ID that can
                be verified anytime.
              </p>

            </div>

          </div>


          {/* FEATURE 03 */}

          <div className="certificate-hero-feature">

            <div className="certificate-hero-feature-icon">
              ↗
            </div>

            <div className="certificate-hero-feature-content">

              <h3>
                Easy Verification
              </h3>

              <p>
                Certificates can be verified online quickly
                and easily.
              </p>

            </div>

          </div>


          {/* CTA */}

          <button
            type="button"
            className="certificate-hero-button"
          >
            <span>
              Get Certified Today
            </span>

            <strong>
              →
            </strong>
          </button>

        </div>

      </div>
    </section>
  );
}

export default CertificateShowcase;