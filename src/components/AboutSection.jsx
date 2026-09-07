function AboutSection() {
  return (
    <section className="about-section" id="about">

      <div className="about-container">

        {/* ================= LEFT CONTENT ================= */}
        <div className="about-content">

          <span className="about-label">
            ABOUT US
          </span>

          <h2>
            Creating For Quality Education
          </h2>

          <p className="about-description">
            We are dedicated to providing quality education that
            transforms learning into practical skills and empowers
            students to achieve their career goals.
          </p>

          {/* BENEFIT 1 */}
          <div className="about-benefit">

            <div className="about-benefit-icon">
              🎓
            </div>

            <div>
              <h3>Certified Learning</h3>
              <p>
                Learn through structured courses designed for
                practical and professional skill development.
              </p>
            </div>

          </div>

          {/* BENEFIT 2 */}
          <div className="about-benefit">

            <div className="about-benefit-icon">
              🎯
            </div>

            <div>
              <h3>Career-Focused Learning</h3>
              <p>
                Develop practical skills with learning designed
                for today's professional world.
              </p>
            </div>

          </div>

          {/* BENEFIT 3 */}
          <div className="about-benefit">

            <div className="about-benefit-icon">
              📚
            </div>

            <div>
              <h3>Flexible Learning</h3>
              <p>
                Access quality learning resources and study
                according to your own pace.
              </p>
            </div>

          </div>

          <button className="about-button">
            Discover More
            <span>→</span>
          </button>

        </div>


        {/* ================= RIGHT EDUCATION PANEL ================= */}

        <div className="about-education-panel">

          <div className="about-panel-title">
            <h3>
              Learn. Practice. Certify. Succeed.
            </h3>

            <div className="about-title-line">
              <span></span>
              <b></b>
              <span></span>
            </div>
          </div>


          {/* TOP LEFT CARD */}
          <div className="about-info-card about-card-one">

            <div className="about-card-icon">
              📄
            </div>

            <div>
              <span>01</span>
              <h4>Quality Content</h4>
              <p>
                Well-structured learning content designed
                for real-world relevance.
              </p>
            </div>

          </div>


          {/* TOP RIGHT CARD */}
          <div className="about-info-card about-card-two">

            <div className="about-card-icon">
              💻
            </div>

            <div>
              <span>02</span>
              <h4>Practical Approach</h4>
              <p>
                Hands-on learning with practical applications
                and skill-based training.
              </p>
            </div>

          </div>


          {/* CENTER EDUCATION CORE */}
          <div className="about-core">

            <div className="about-core-ring">

              <div className="about-core-inner">
                <div className="about-core-icon">
                  🎓
                </div>

                <strong>
                  YOUR SUCCESS
                </strong>

                <span>
                  IS OUR MISSION
                </span>
              </div>

            </div>

          </div>


          {/* BOTTOM LEFT CARD */}
          <div className="about-info-card about-card-three">

            <div className="about-card-icon">
              ⚙
            </div>

            <div>
              <span>03</span>
              <h4>Modern Technology</h4>
              <p>
                Digital tools and modern learning platforms
                for a smarter experience.
              </p>
            </div>

          </div>


          {/* BOTTOM RIGHT CARD */}
          <div className="about-info-card about-card-four">

            <div className="about-card-icon">
              📈
            </div>

            <div>
              <span>04</span>
              <h4>Better Outcomes</h4>
              <p>
                Focused skill development with measurable
                learning and career outcomes.
              </p>
            </div>

          </div>


          {/* FEATURE RIBBON */}
          <div className="about-feature-ribbon">

            <div>
              <span>🎥</span>
              <strong>Live & Recorded</strong>
              <small>Learning</small>
            </div>

            <div>
              <span>📝</span>
              <strong>Assessments</strong>
              <small>& Practice Tests</small>
            </div>

            <div>
              <span>🏆</span>
              <strong>Verified</strong>
              <small>Certificates</small>
            </div>

            <div>
              <span>👥</span>
              <strong>Student Support</strong>
              <small>Guidance</small>
            </div>

            <div>
              <span>📱</span>
              <strong>Any Device</strong>
              <small>Learning</small>
            </div>

          </div>


          {/* STATISTICS */}
          <div className="about-stats">

            <div>
              <span>🎓</span>
              <strong>10K+</strong>
              <small>Students</small>
            </div>

            <div>
              <span>📚</span>
              <strong>50+</strong>
              <small>Courses</small>
            </div>

            <div>
              <span>🤝</span>
              <strong>200+</strong>
              <small>Partners</small>
            </div>

            <div>
              <span>🏅</span>
              <strong>98%</strong>
              <small>Success</small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default AboutSection;