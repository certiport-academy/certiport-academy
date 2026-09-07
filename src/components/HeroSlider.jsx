import { useEffect, useState } from "react";
import { Search, ArrowRight } from "lucide-react";
import { heroSlides } from "../data/heroSlides";

function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slide = heroSlides[activeSlide];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero">
      <div className="hero-decoration decoration-one" />
      <div className="hero-decoration decoration-two" />

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content" key={`content-${slide.id}`}>

          <h1>
            {slide.title}{" "}
            <span>{slide.highlight}</span>{" "}
            {slide.titleEnd}{" "}
            <span>{slide.highlightEnd}</span>
          </h1>

          <p>{slide.description}</p>

          <div className="hero-buttons">
            <button className="primary-button">
              {slide.primaryButton}
              <ArrowRight size={18} />
            </button>

            <button className="secondary-button">
              {slide.secondaryButton}
            </button>
          </div>

          <div className="course-search">
            <span>Search for courses...</span>

            <button aria-label="Search courses">
              <Search size={21} />
            </button>
          </div>

          <div className="stats">
            <div>
              <strong>200+</strong>
              <span>Courses</span>
            </div>

            <div>
              <strong>50+</strong>
              <span>Expert Tutors</span>
            </div>

            <div>
              <strong>10K+</strong>
              <span>Students</span>
            </div>
          </div>

        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual" key={`visual-${slide.id}`}>

          <div className="hero-image-frame">
            <img
              src={slide.image}
              alt={slide.highlightEnd || "Certiport Academy"}
              className="hero-slide-image"
            />
          </div>

          <div className="student-badge">
            <strong>{slide.badge}</strong>
            <span>{slide.badgeText}</span>
          </div>

        </div>

      </div>

      {/* SLIDER DOTS */}
      <div className="slider-controls">
        {heroSlides.map((item, index) => (
          <button
            key={item.id}
            className={index === activeSlide ? "active" : ""}
            onClick={() => setActiveSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

    </section>
  );
}

export default HeroSlider;