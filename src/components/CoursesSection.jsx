import { useState } from "react";

const courses = [
  {
    category: "COMPUTER",
    level: "Beginner",
    title: "DCA",
    description: "Diploma in Computer Application",
    duration: "12 Months",
    modules: "6 Modules",
    price: "₹10000",
    image: "/courses/dca.jpg",
  },
  {
    category: "COMPUTER",
    level: "Advanced",
    title: "ADCA",
    description: "Advance Diploma in Computer Application",
    duration: "12 Months",
    modules: "6 Modules",
    price: "₹12000",
    image: "/courses/adca.jpg",
  },
  {
    category: "ACCOUNTING",
    level: "Intermediate",
    title: "Tally Champion",
    description: "Tally Prime, GST & Accounting",
    duration: "06 Months",
    modules: "6 Modules",
    price: "₹6000",
    image: "/courses/tally.jpg",
  },
  {
    category: "ACCOUNTING",
    level: "Intermediate",
    title: "DFA",
    description: "Diploma in Financial Accounting",
    duration: "06 Months",
    modules: "6 Modules",
    price: "₹6000",
    image: "/courses/dfa.jpg",
  },
  {
    category: "ACCOUNTING",
    level: "Advanced",
    title: "ADFA",
    description: "Advanced Diploma in Financial Accounting",
    duration: "12 Months",
    modules: "6 Modules",
    price: "₹12000",
    image: "/courses/adfa.jpg",
  },
  {
    category: "COMPUTER",
    level: "Intermediate",
    title: "DCIA",
    description: "Diploma in Computer & Internet Applications",
    duration: "06 Months",
    modules: "6 Modules",
    price: "₹7000",
    image: "/courses/dcia.jpg",
  },
];

function CoursesSection() {
  const [startIndex, setStartIndex] = useState(0);

  const visibleCourses = courses.slice(startIndex, startIndex + 5);

  const nextCourses = () => {
    if (startIndex + 5 < courses.length) {
      setStartIndex(startIndex + 1);
    }
  };

  const previousCourses = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  return (
    <section className="courses-section" id="courses">

      <div className="courses-container">

        {/* SECTION HEADER */}
        <div className="courses-header">

          <div>
            <span className="courses-label">
              OUR COURSES
            </span>

            <h2>
              Explore Our Popular Courses
            </h2>

            <p>
              Explore our most popular courses and start your
              learning journey today.
            </p>
          </div>

          <button className="courses-view-all">
            View All Courses
            <span>→</span>
          </button>

        </div>

        {/* COURSE SLIDER */}
        <div className="courses-slider">

          {/* LEFT ARROW */}
          <button
            className="courses-arrow courses-arrow-left"
            onClick={previousCourses}
            disabled={startIndex === 0}
            aria-label="Previous courses"
          >
            ←
          </button>

          {/* COURSE CARDS */}
          <div className="courses-grid">

            {visibleCourses.map((course) => (

              <article
                className="course-card"
                key={course.title}
              >

                {/* IMAGE */}
                <div className="course-image">

                  <img
                    src={course.image}
                    alt={course.title}
                  />

                  <span className="course-category">
                    {course.category}
                  </span>

                  <span className="course-level">
                    {course.level}
                  </span>

                </div>

                {/* CONTENT */}
                <div className="course-content">

                  <h3>
                    {course.title}
                  </h3>

                  <p className="course-description">
                    {course.description}
                  </p>

                  {/* META */}
                  <div className="course-meta">

                    <span>
                      ◷ {course.duration}
                    </span>

                    <span>
                      ◫ {course.modules}
                    </span>

                  </div>

                  {/* BOTTOM */}
                  <div className="course-footer">

                    <strong className="course-price">
                      {course.price}
                    </strong>

                    <button className="course-button">
                      Learn More
                      <span>→</span>
                    </button>

                  </div>

                </div>

              </article>

            ))}

          </div>

          {/* RIGHT ARROW */}
          <button
            className="courses-arrow courses-arrow-right"
            onClick={nextCourses}
            disabled={startIndex + 5 >= courses.length}
            aria-label="Next courses"
          >
            →
          </button>

        </div>

        {/* SLIDER DOTS */}
        <div className="courses-dots">

          {courses.map((course, index) => {

            const isActive =
              index >= startIndex &&
              index < startIndex + 5;

            return (
              <button
                key={course.title}
                className={`course-dot ${
                  isActive ? "active" : ""
                }`}
                onClick={() => {
                  if (index <= courses.length - 5) {
                    setStartIndex(index);
                  }
                }}
                aria-label={`Show course ${index + 1}`}
              />
            );

          })}

        </div>

      </div>

    </section>
  );
}

export default CoursesSection;