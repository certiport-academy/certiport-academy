import React, { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

const openLightbox = (index) => {
  setSelectedImage(index);
};

const closeLightbox = () => {
  setSelectedImage(null);
};

const showPrevious = () => {
  setSelectedImage((current) =>
    current === 0 ? filteredImages.length - 1 : current - 1
  );
};

const showNext = () => {
  setSelectedImage((current) =>
    current === filteredImages.length - 1 ? 0 : current + 1
  );
};

  const galleryImages = [
    {
      src: "/gallery/certification/students-01.jpg",
      category: "Certification",
      alt: "Certiport Academy Achievement",
    },
    {
      src: "/gallery/certification/students-02.jpg",
      category: "Certification",
      alt: "Certiport Academy Achievement",
    },
    {
      src: "/gallery/certification/students-03.jpg",
      category: "Certification",
      alt: "Certiport Academy Student Achievement",
    },
    {
      src: "/gallery/certification/students-04.jpg",
      category: "Certification",
      alt: "Certiport Academy Award Achievement",
    },
    {
      src: "/gallery/certification/students-05.png",
      category: "Certification",
      alt: "Certiport Academy Certification",
    },
    {
      src: "/gallery/certification/students-06.jpg",
      category: "Certification",
      alt: "Certiport Academy Partner",
    },
    {
      src: "/gallery/certification/students-07.jpg",
      category: "Certification",
      alt: "Certiport Academy Student Achievement",
    },
  ];

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter(
          (image) => image.category === activeCategory
        );
        useEffect(() => {
  if (selectedImage === null) return;

  const handleKeyDown = (event) => {
    if (event.key === "Escape") {
      closeLightbox();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  };

  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("keydown", handleKeyDown);
  };
}, [selectedImage, filteredImages.length]);

  return (
    <div className="gallery-page">

      {/* HERO */}
      
<section className="gallery-hero">

  {/* Decorative Elements */}
  <div className="gallery-hero-dots gallery-hero-dots-left"></div>
  <div className="gallery-hero-dots gallery-hero-dots-right"></div>

  <div className="gallery-hero-ring"></div>

  <div className="gallery-hero-line"></div>

  <div className="gallery-hero-container">

    <div className="gallery-hero-image">
      <img
        src="/gallery/gallery-hero-banner.png"
        alt="Certiport Academy Gallery"
      />
    </div>

    <div className="gallery-container">

      <span className="gallery-eyebrow">
        OUR GALLERY
      </span>

      <h1>
        Explore Our
        <span> Journey & Moments</span>
      </h1>

      <p>
        Discover the moments, achievements, events and experiences
        that make the Certiport Academy community special.
      </p>

    </div>

  </div>

</section>

      {/* GALLERY */}
      <section className="gallery-grid-section">
        <div className="gallery-container">

          <div className="gallery-section-heading">
            <span>OUR MOMENTS</span>

            <h2>
              Memories That Inspire
            </h2>

            <p>
              A glimpse of our training, events, achievements and
              growing Certiport Academy community.
            </p>
          </div>

          {/* FILTERS */}
          <div className="gallery-filters">

            {[
              "All",
              "Training & Classes",
              "Events & Workshops",
              "Students",
              "Awards & Achievements",
              "Certification",
              "Partners",
            ].map((category) => (
              <button
                key={category}
                className={`gallery-filter ${
                  activeCategory === category ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}

          </div>

          {/* IMAGE GRID */}
          <div className="gallery-grid">

            {filteredImages.map((image, index) => (
              <div
  className={`gallery-item ${
    index === 0 ? "gallery-item-large" : ""
  }`}
  key={image.src}
  onClick={() => openLightbox(index)}
>
                <img
                  src={image.src}
                  alt={image.alt}
                  className="gallery-image"
                />
              </div>
            ))}

          </div>

        </div>
        {selectedImage !== null && (
  <div
    className="gallery-lightbox"
    onClick={closeLightbox}
  >
    <button
      className="gallery-lightbox-close"
      onClick={closeLightbox}
      aria-label="Close"
    >
      ×
    </button>

    <button
      className="gallery-lightbox-prev"
      onClick={(e) => {
        e.stopPropagation();
        showPrevious();
      }}
      aria-label="Previous image"
    >
      ‹
    </button>

    <img
      src={filteredImages[selectedImage].src}
      alt={filteredImages[selectedImage].alt}
      className="gallery-lightbox-image"
      onClick={(e) => e.stopPropagation()}
    />
    <div className="gallery-lightbox-counter">
  {selectedImage + 1} / {filteredImages.length}
</div>

    <button
      className="gallery-lightbox-next"
      onClick={(e) => {
        e.stopPropagation();
        showNext();
      }}
      aria-label="Next image"
    >
      ›
    </button>
  </div>
)}
      </section>

    </div>
  );
}

export default Gallery;