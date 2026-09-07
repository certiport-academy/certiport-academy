import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, Monitor, ShieldCheck } from "lucide-react";
import { courses } from "../data/courses";


function CourseImage({ src, alt }) {
  return (
    <div className="courses-page-logo">
      <img
        src={src}
        alt={alt}
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />

      <span className="courses-page-logo-placeholder">
        COURSE
      </span>
    </div>
  );
}

function CoursesPage() {
  const navigate = useNavigate();
    const [selectedCategory, setSelectedCategory] = useState("All");
    const filteredCourses =
  selectedCategory === "All"
    ? courses
    : courses.filter(
        (course) => course.category === selectedCategory
      );
  return (
    <div className="courses-page">

      {/* ================= HERO ================= */}

      <section className="courses-page-hero">

        <div className="courses-page-hero-content">

          <span className="courses-page-label">
            CERTIPORT ACADEMY
          </span>

          <h1>
            Our Courses
          </h1>

          <div className="courses-page-title-line">
            <span></span>
            <b></b>
          </div>

          <p>
            Explore industry-ready IT programs designed to make you
            job-ready with expert mentors and verified certifications.
          </p>

        </div>

      </section>


      {/* ================= COURSE CONTENT ================= */}

      <section className="courses-page-content">

        <div className="courses-page-container">

          <div className="courses-page-layout">

            {/* ================= FEATURED ================= */}

<div className="courses-featured">

  <div className="courses-featured-image">

    <img
      src="/courses/courses-featured.jpg"
      alt="Students at Certiport Academy"
      onError={(event) => {
        event.currentTarget.style.display = "none";
      }}
    />

    <div className="courses-featured-image-shade"></div>

  </div>

  <div className="courses-featured-overlay">

    <span className="courses-featured-badge">
      FEATURED PROGRAMS
    </span>

    <h2>
      Learn from India's
      <br />
      leading IT Academy
    </h2>

    <p>
      Hands-on training, expert mentors and verified
      certifications for every learner.
    </p>

    <div className="courses-featured-stats">

  <div className="courses-featured-stat">

    <GraduationCap size={24} />

    <div className="courses-featured-stat-content">
      <strong>10+</strong>
      <span>Programs</span>
    </div>

  </div>


  <div className="courses-featured-stat">

    <Monitor size={24} />

    <div className="courses-featured-stat-content">
      <strong>100%</strong>
      <span>Practical Lab</span>
    </div>

  </div>


  <div className="courses-featured-stat">

    <ShieldCheck size={24} />

    <div className="courses-featured-stat-content">
      <strong>✓</strong>
      <span>Global Certified</span>
    </div>

  </div>

</div>

  </div>

</div>


            {/* ================= COURSE GRID ================= */}

            <div className="courses-page-grid">

              {courses.slice(0, 4).map((course) => (

                <article
                  className="courses-page-card"
                  key={course.name}
                >

                  {/* COURSE TOP */}

                  <div className="courses-page-card-top">

                    <CourseImage
                      src={course.logo}
                      alt={`${course.name} logo`}
                    />

                    <div className="courses-page-card-heading">

                      <h3>
                        {course.name}
                      </h3>

                      <p>
                        {course.description}
                      </p>

                    </div>

                  </div>


                  {/* COURSE META */}

                  <div className="courses-page-meta">

                    <span>
                      <strong>Duration:</strong>{" "}
                      {course.duration}
                    </span>

                    <span>
                      <strong>Fees:</strong>{" "}
                      {course.fees}
                    </span>

                  </div>


                  {/* COURSE FOOTER */}

                  <div className="courses-page-card-footer">

                    <div className="courses-page-badges">

                      <span className="courses-page-level">
                        {course.level}
                      </span>

                      {course.certified && (
                        <span className="courses-page-certified">
                          ♙ Certified
                        </span>
                      )}

                    </div>

                    <button
                      type="button"
                      className="courses-page-details"
                      onClick={() => navigate(`/courses/${course.id}`)}
                    >
                      View Details
                      <span>→</span>
                    </button>

                  </div>

                </article>

              ))}

            </div>

          </div>

        </div>

      </section>
      {/* ================= ALL COURSES ================= */}

<section className="all-courses-section">

  <div className="all-courses-container">

    <div className="all-courses-heading">

      <h2>All Courses</h2>

      <div className="all-courses-title-line">
        <span></span>
        <b></b>
      </div>

      <p>
        Filter by category and find the right program for your career goals.
      </p>

    </div>

    <div className="all-courses-filters">

      <div className="all-courses-filters">

  <label
    htmlFor="course-category"
    className="all-courses-category-label"
  >
    Course Category
  </label>

  <div className="all-courses-select-wrapper">

    <select
      id="course-category"
      className="all-courses-select"
      value={selectedCategory}
      onChange={(event) =>
        setSelectedCategory(event.target.value)
      }
    >

      <option value="All">
        All Courses
      </option>

      <option value="Computer Fundamentals & Office Automation">
        Computer Fundamentals & Office Automation
      </option>

      <option value="Diploma & Computer Applications">
        Diploma & Computer Applications
      </option>

      <option value="Accounting & Business Applications">
        Accounting & Business Applications
      </option>

      <option value="Graphic Design & Creative Technology">
        Graphic Design & Creative Technology
      </option>

      <option value="Web Design & Web Development">
        Web Design & Web Development
      </option>

      <option value="IT Specialist Programs">
        IT Specialist Programs
      </option>

      <option value="Artificial Intelligence & Machine Learning">
        Artificial Intelligence & Machine Learning
      </option>

      <option value="Data Science & Data Analytics">
        Data Science & Data Analytics
      </option>

      <option value="Cyber Security & Ethical Hacking">
        Cyber Security & Ethical Hacking
      </option>

      <option value="Digital Marketing & E-Commerce">
        Digital Marketing & E-Commerce
      </option>

      <option value="Networking & Hardware">
        Networking & Hardware
      </option>

      <option value="Technical & Engineering Software">
        Technical & Engineering Software
      </option>

      <option value="Multimedia & Animation">
        Multimedia & Animation
      </option>

      <option value="Professional & Employability Skills">
        Professional & Employability Skills
      </option>

    </select>

    <span className="all-courses-select-arrow">
      ▾
    </span>

  </div>

</div>

    </div>

    <div className="all-courses-grid">

      {filteredCourses.map((course) => (

        <article
          className="all-course-card"
          key={`all-${course.name}`}
        >

          <div className="all-course-image">

  <img
    src={course.image}
    alt={course.name}
    onError={(event) => {
      event.currentTarget.style.display = "none";
    }}
  />

</div>

          <div className="all-course-content">

            <h3>{course.name}</h3>

            <p>{course.description}</p>

            <div className="all-course-meta">

              <span>
                Duration: {course.duration}
              </span>

              <span>
                Fees: ₹{course.fees}
              </span>

            </div>

            <div className="all-course-footer">

              <span className="courses-page-level">
                {course.level}
              </span>

              {course.certified && (
                <span className="courses-page-certified">
                  ♙ Certified
                </span>
              )}

              <button
  type="button"
  onClick={() => navigate(`/courses/${course.id}`)}
>
  View Details →
</button>

            </div>

          </div>

        </article>

      ))}

    </div>

  </div>

</section>

    </div>
  );
}

export default CoursesPage;