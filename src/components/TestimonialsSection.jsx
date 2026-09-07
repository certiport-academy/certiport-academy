import React, { useEffect, useState } from "react";
import learnerImage from "../assets/learner.png";

const testimonials = [
  {
    name: "Rahul Sharma",
    course: "ADCA Student",
    initials: "RS",
    rating: "5.0",
    review:
      "The course content is practical and easy to understand. The learning experience helped me improve my computer skills with confidence.",
    color: "blue",
  },
  {
    name: "Priya Verma",
    course: "Tally Champion Student",
    initials: "PV",
    rating: "5.0",
    review:
      "The accounting and GST training was very useful. The practical approach made the concepts much easier to understand.",
    color: "pink",
  },
  {
    name: "Amit Kumar",
    course: "DCA Student",
    initials: "AK",
    rating: "4.9",
    review:
      "I really liked the structured learning approach and assessment system. It gave me a better understanding of the skills I was learning.",
    color: "green",
  },
  {
    name: "Neha Singh",
    course: "DFA Student",
    initials: "NS",
    rating: "5.0",
    review:
      "The practical learning approach helped me understand computer applications much better and improved my confidence.",
    color: "purple",
  },
  {
    name: "Vikas Kumar",
    course: "Tally Prime Student",
    initials: "VK",
    rating: "4.9",
    review:
      "The training was well structured and the practical examples made accounting and GST concepts easier to learn.",
    color: "orange",
  },
  {
    name: "Anjali Gupta",
    course: "DCA Student",
    initials: "AG",
    rating: "5.0",
    review:
      "The learning environment was excellent. The course content and assessment system made my learning journey very effective.",
    color: "cyan",
  },
];

function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const total = testimonials.length;

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % total);
  };

  const previousSlide = () => {
    setActiveIndex((current) => (current - 1 + total) % total);
  };

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % total);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, total]);

  const visibleTestimonials = [
    testimonials[activeIndex % total],
    testimonials[(activeIndex + 1) % total],
    testimonials[(activeIndex + 2) % total],
  ];

  return (
    <section className="testimonials-section">

      <div className="testimonials-container">

        {/* =========================
            HEADING
        ========================== */}

        <div className="testimonials-heading">

          <div className="testimonials-label">
            WHAT PEOPLE SAY
          </div>

          <h2>
            Trusted By <span>Learners</span>
          </h2>

          <div className="testimonials-heading-line">
            <span></span>
            <b></b>
          </div>

          <p>
            Discover what our learners say about their learning experience,
            practical training and certification journey.
          </p>

        </div>


        {/* =========================
            TESTIMONIAL SLIDER
        ========================== */}

        <div
          className="testimonials-slider"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >

          {/* LEFT INTRO CARD */}

          <div className="testimonials-learner">

            <img
            src={learnerImage}
            alt="Happy Learner"
            className="learner-image"
            />

            <h3>
              Happy Learners
            </h3>

            <p>
              Real Experiences,
              <br />
              Real Growth
            </p>

            <div className="learner-rating">
              ★★★★★
            </div>

            <small>
              Trusted by thousands
            </small>

          </div>


          {/* LEFT ARROW */}

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-left"
            onClick={previousSlide}
            aria-label="Previous testimonials"
          >
            ‹
          </button>


          {/* CARDS */}

          <div className="testimonials-cards">

            {visibleTestimonials.map((item) => (

              <article
                className={`testimonial-card testimonial-card-${item.color}`}
                key={item.name}
              >

                <div className="testimonial-quote-mark">
                  “
                </div>


                {/* STUDENT */}

                <div className="testimonial-card-top">

                  <div className="testimonial-student">

                    <div
                      className={`testimonial-photo testimonial-photo-${item.color}`}
                    >
                      {item.initials}
                    </div>

                    <div className="testimonial-student-info">

                      <h3>
                        {item.name}
                      </h3>

                      <p>
                        {item.course}
                      </p>

                    </div>

                  </div>

                  <span className="testimonial-verified">
                    ✓ Verified
                  </span>

                </div>


                {/* RATING */}

                <div className="testimonial-rating">

                  <span>
                    ★★★★★
                  </span>

                  <strong>
                    {item.rating}
                  </strong>

                </div>


                {/* REVIEW */}

                <p className="testimonial-text">
                  {item.review}
                </p>


                {/* BOTTOM */}

                <div className="testimonial-card-footer">
                  <span>
                    Verified Student
                  </span>

                  <span>
                    ✓
                  </span>
                </div>

              </article>

            ))}

          </div>


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="testimonial-arrow testimonial-arrow-right"
            onClick={nextSlide}
            aria-label="Next testimonials"
          >
            ›
          </button>

        </div>


        {/* =========================
            PAGINATION
        ========================== */}

        <div className="testimonial-pagination">

          {testimonials.map((_, index) => (

            <button
              key={index}
              type="button"
              className={index === activeIndex ? "active" : ""}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />

          ))}

        </div>


        {/* =========================
            STATISTICS
        ========================== */}

        <div className="testimonial-stat-bar">

          <div className="testimonial-stat">

            <div className="testimonial-stat-icon">
              ☺
            </div>

            <div>
              <strong>
                4.9<span>/5</span>
              </strong>

              <small>
                Average Rating
              </small>
            </div>

          </div>


          <div className="testimonial-stat">

            <div className="testimonial-stat-icon">
              👥
            </div>

            <div>
              <strong>
                25K+
              </strong>

              <small>
                Happy Learners
              </small>
            </div>

          </div>


          <div className="testimonial-stat">

            <div className="testimonial-stat-icon">
              ★
            </div>

            <div>
              <strong>
                12K+
              </strong>

              <small>
                Positive Reviews
              </small>
            </div>

          </div>


          <div className="testimonial-stat">

            <div className="testimonial-stat-icon">
              🏆
            </div>

            <div>
              <strong>
                98%
              </strong>

              <small>
                Completion Rate
              </small>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default TestimonialsSection;