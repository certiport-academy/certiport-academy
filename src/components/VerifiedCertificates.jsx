import { useEffect, useState } from "react";

function VerifiedCertificates() {
  const [activeSlide, setActiveSlide] = useState(0);

  const certificates = [
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
      image: "/verified/verified-certificates01.png",
      title: "DFA — Diploma",
      certificateId: "CA-VER-5M8C3X",
    },
  ];

  useEffect(() => {
    const rotationTimer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % certificates.length);
    }, 3500);

    return () => clearInterval(rotationTimer);
  }, [certificates.length]);

  const getPosition = (index) => {
    const difference =
      (index - activeSlide + certificates.length) % certificates.length;

    if (difference === 0) return "center";
    if (difference === 1) return "right";

    return "left";
  };

  const activeCertificate = certificates[activeSlide];

  return (
    <section
      className="verified-section"
      id="verified-certificates"
    >
      <div className="verified-container">

        {/* LEFT — 3D CERTIFICATE VISUAL */}
        <div className="verified-visual">

          <div className="verified-3d-stage">

            {certificates.map((certificate, index) => {
              const position = getPosition(index);

              return (
                <div
                  key={certificate.id}
                  className={`verified-3d-card verified-position-${position}`}
                >
                  <img
                    src={certificate.image}
                    alt={`${certificate.title} Certificate`}
                  />

                  {/* VERIFIED BADGE — CENTER ONLY */}
                  {position === "center" && (
                    <>
                      <div
                        className="verified-badge"
                        aria-label="Verified"
                      >
                        ✓
                      </div>

                      <div className="certificate-card">

                        <div className="certificate-content">

                          <span className="certificate-label">
                            CERTIFIED
                          </span>

                          <strong>
                            {certificate.title}
                          </strong>

                          <small>
                            ID: {certificate.certificateId}
                          </small>

                        </div>

                        <div
                          className="certificate-gold-badge"
                          aria-label="Certified"
                        >
                          <div className="gold-badge-inner">
                            ★
                          </div>

                          <span className="gold-ribbon gold-ribbon-left"></span>

                          <span className="gold-ribbon gold-ribbon-right"></span>
                        </div>

                      </div>
                    </>
                  )}

                </div>
              );
            })}

          </div>

        </div>

        {/* RIGHT — CONTENT */}
        <div className="verified-content">

          <span className="verified-label">
            ♙ Verified Achievements
          </span>

          <h2>
            Verified Certificates
          </h2>

          <p className="verified-description">
            Earn a verified certificate after successful completion
            of your course and assessment. Our certificates are
            designed to validate your skills and knowledge.
          </p>

          <div className="verified-features">

            <div className="verified-feature">

              <div className="verified-icon">
                ✓
              </div>

              <div className="verified-feature-content">

                <h3>
                  Digitally Verified
                </h3>

                <p>
                  All certificates are digitally verified for
                  authenticity and security.
                </p>

              </div>

            </div>

            <div className="verified-feature">

              <div className="verified-icon">
                ★
              </div>

              <div className="verified-feature-content">

                <h3>
                  Unique Certificate ID
                </h3>

                <p>
                  Every certificate has a unique ID that can be
                  verified anytime.
                </p>

              </div>

            </div>

            <div className="verified-feature">

              <div className="verified-icon">
                ↗
              </div>

              <div className="verified-feature-content">

                <h3>
                  Easy Verification
                </h3>

                <p>
                  Certificates can be verified online quickly
                  and easily.
                </p>

              </div>

            </div>

          </div>

          <button
            type="button"
            className="verified-button"
          >
            Get Certified Today
            <span>→</span>
          </button>

        </div>

      </div>
    </section>
  );
}

export default VerifiedCertificates;