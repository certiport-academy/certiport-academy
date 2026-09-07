function AssessmentPartners() {
  const partners = [
    {
      icon: "▣",
      title: "Assessment",
      title2: "Partner",
      subtitle: "Skill Assessment",
      type: "assessment",
    },
    {
      icon: "✥",
      title: "Certification",
      title2: "Partner",
      subtitle: "Professional Certification",
      type: "certification",
    },
    {
      icon: "⌂",
      title: "Training",
      title2: "Partner",
      subtitle: "Learning & Assessment",
      type: "training",
    },
    {
      icon: "</>",
      title: "Technology",
      title2: "Partner",
      subtitle: "Digital Assessment",
      type: "technology",
    },
  ];

  return (
    <section className="assessment-partners-section">

      <div className="assessment-world-pattern"></div>
      <div className="assessment-orange-orbit"></div>

      <div className="assessment-partners-container">

        {/* LEFT CONTENT */}

        <div className="assessment-partners-content">

          <div className="assessment-partners-label">
            <span>ASSESSMENT PARTNERS</span>
            <i></i>
          </div>

          <h2>
            Trusted Assessment &
            <br />
            Certification Partners
          </h2>

          <div className="assessment-title-line"></div>

          <p>
            We work with trusted assessment and certification
            partners to provide learners with reliable skill
            evaluation and professional certification
            opportunities.
          </p>

          <button className="assessment-partners-button">
            Become an Assessment Partner
            <span>→</span>
          </button>

          <div className="assessment-benefits">

            <div className="assessment-benefit">
              <div className="assessment-benefit-icon">✓</div>
              <span>Trusted<br />Networks</span>
            </div>

            <div className="assessment-benefit">
              <div className="assessment-benefit-icon">✦</div>
              <span>Quality<br />Standards</span>
            </div>

            <div className="assessment-benefit">
              <div className="assessment-benefit-icon">♢</div>
              <span>Strong<br />Collaboration</span>
            </div>

            <div className="assessment-benefit">
              <div className="assessment-benefit-icon">↗</div>
              <span>Better<br />Outcomes</span>
            </div>

          </div>

        </div>


        {/* RIGHT PARTNER CARDS */}

        <div className="assessment-partners-grid">

          {partners.map((partner, index) => (

            <div
              className={`assessment-partner-card assessment-card-${partner.type}`}
              key={index}
            >

              <div className="assessment-partner-icon">
                {partner.icon}
              </div>

              <div className="assessment-partner-info">

                <h3>
                  {partner.title}
                  <br />
                  {partner.title2}
                </h3>

                <div className="assessment-card-line"></div>

                <p>{partner.subtitle}</p>

              </div>

              <button
                className="assessment-partner-arrow"
                aria-label={`${partner.title} details`}
              >
                →
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default AssessmentPartners;