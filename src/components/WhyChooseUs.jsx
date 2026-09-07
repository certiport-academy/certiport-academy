import { useEffect, useState } from "react";
function WhyChooseUs() {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

useEffect(() => {
  const section = document.querySelector(".why-choose-section");

  if (!section) return;

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    },
    {
      threshold: 0.25,
    }
  );

  observer.observe(section);

  return () => observer.disconnect();
}, []);

useEffect(() => {
  if (!isVisible) return;

  const timer = setInterval(() => {
    setProgress((value) => {
      if (value >= 85) {
        clearInterval(timer);
        return 85;
      }

      return value + 1;
    });
  }, 20);

  return () => clearInterval(timer);
}, [isVisible]);
  return (
    <section className="why-choose-section">

      <div className="why-choose-container">

        {/* ================= LEFT VISUAL ================= */}

        <div className="why-choose-visual">

          <div className="why-choose-visual-card">

            {/* BRAND */}

            <div className="why-choose-brand">

              <span className="why-choose-cap">
                🎓
              </span>

              <div>
                <strong>CERTIPORT ACADEMY</strong>
                <small>
                  Learning & Certification Platform
                </small>
              </div>

            </div>


            {/* TOP STATS */}

            <div className="why-stat-row">

              <div className="why-stat-card">

                <span className="why-stat-icon">
                  📚
                </span>

                <div>
                  <strong>200+</strong>
                  <span>Courses</span>
                </div>

              </div>


              <div className="why-stat-card">

                <span className="why-stat-icon">
                  🏆
                </span>

                <div>
                  <strong>10K+</strong>
                  <span>Learners</span>
                </div>

              </div>

            </div>


            {/* LEARNING DASHBOARD */}

            <div className="why-dashboard">

              <div className="why-dashboard-header">

                <strong>
                  Learning Dashboard
                </strong>

                <span>
                  ●
                </span>

              </div>


              <div className="why-progress">

                <div className="why-progress-circle">

  <svg
    className="progress-ring"
    viewBox="0 0 120 120"
  >
    {/* Background Circle */}
    <circle
      className="progress-ring-bg"
      cx="60"
      cy="60"
      r="50"
    />

    {/* Blue Progress Circle */}
    <circle
  className="progress-ring-value"
  cx="60"
  cy="60"
  r="50"
  style={{
    strokeDashoffset: 314 - (314 * progress) / 100,
  }}
/>
  </svg>

  <div className="why-progress-text">

    <strong>
      {progress}%
    </strong>

    <span>
      Progress
    </span>

  </div>

</div>


                <div className="why-progress-content">

                  <strong>
                    Course Progress
                  </strong>

                  <span>
                    Advanced Computer Applications
                  </span>

                  <div className="why-progress-bar">
  <div
    className="why-progress-fill"
    style={{ width: `${progress}%` }}
  ></div>
</div>

                </div>

              </div>


              <div className="why-dashboard-stats">

  <div>
    <strong>{String(Math.round((progress / 85) * 8)).padStart(2, "0")}</strong>
    <span>Enrolled</span>
  </div>

  <div>
    <strong>{String(Math.round((progress / 85) * 5)).padStart(2, "0")}</strong>
    <span>Completed</span>
  </div>

  <div>
    <strong>{String(Math.round((progress / 85) * 3)).padStart(2, "0")}</strong>
    <span>Certified</span>
  </div>

</div>

            </div>


            {/* THREE FEATURE STRIP */}

            <div className="why-feature-strip">

              <div className="why-feature-item">

                <div className="why-feature-icon">
                  💻
                </div>

                <div className="why-feature-text">

                  <strong>
                    Practical Training
                  </strong>

                  <span>
                    Learn • Practice • Perform
                  </span>

                </div>

              </div>


              <div className="why-feature-item">

                <div className="why-feature-icon">
                  🛡️
                </div>

                <div className="why-feature-text">

                  <strong>
                    Online Examination
                  </strong>

                  <span>
                    Secure Assessments
                  </span>

                </div>

              </div>


              <div className="why-feature-item">

                <div className="why-feature-icon">
                  🏅
                </div>

                <div className="why-feature-text">

                  <strong>
                    Verified Certificate
                  </strong>

                  <span>
                    Certificate of Achievement
                  </span>

                </div>

              </div>

            </div>


            {/* LEARNING JOURNEY */}

            <div className="why-learning-bar">

              <div>

                <strong>
                  Your Learning Journey
                </strong>

                <span>
                  Keep going! You are doing great.
                </span>

              </div>

              <strong>
                85%
              </strong>

            </div>


            {/* BOTTOM FEATURES */}

            <div className="why-bottom-features">

              <div>
                <span>📖</span>
                <small>
                  Expert
                  <br />
                  Instructors
                </small>
              </div>


              <div>
                <span>👥</span>
                <small>
                  Flexible
                  <br />
                  Learning
                </small>
              </div>


              <div>
                <span>🎧</span>
                <small>
                  24/7
                  <br />
                  Support
                </small>
              </div>


              <div>
                <span>✓</span>
                <small>
                  Verified
                  <br />
                  Certificates
                </small>
              </div>

            </div>

          </div>

        </div>


        {/* ================= RIGHT CONTENT ================= */}

        <div className="why-choose-content">

          <span className="why-choose-label">
            WHY CHOOSE US
          </span>


          <h2>
            Develop Your Skills, Learn Something New And Grow Your
            Skills From Anywhere In The World
          </h2>


          <p className="why-choose-description">
            Our platform provides everything you need to advance
            your career with practical courses, professional
            training and a supportive learning community.
          </p>


          <div className="why-choose-points">

            <div className="why-choose-point">

              <span>✓</span>

              <p>
                Access to 200+ premium courses
              </p>

            </div>


            <div className="why-choose-point">

              <span>✓</span>

              <p>
                Learn from certified industry experts
              </p>

            </div>


            <div className="why-choose-point">

              <span>✓</span>

              <p>
                Flexible study schedule at your pace
              </p>

            </div>


            <div className="why-choose-point">

              <span>✓</span>

              <p>
                Earn verified skill certificates
              </p>

            </div>

          </div>


          <button className="why-choose-button">

            Get Started Now

            <span>
              →
            </span>

          </button>

        </div>

      </div>

    </section>
  );
}

export default WhyChooseUs;