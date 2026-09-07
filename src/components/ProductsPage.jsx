import React, { useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

function ProductsPage() {

  const [selectedCategory, setSelectedCategory] =
    useState("All Products");

  const categories = [
    "All Products",
    "Institute Management Kit",
    "Student Admission Kit",
    "Student Training Kit",
    "Qualification Kit",
    "Championship Kit",
    "Other Stationery"
  ];
  const [searchTerm, setSearchTerm] = useState("");

const filteredProducts = products.filter((product) => {
  const matchesCategory =
    selectedCategory === "All Products" ||
    product.category === selectedCategory;

  const searchValue = searchTerm.toLowerCase().trim();

  const matchesSearch =
    !searchValue ||
    product.name.toLowerCase().includes(searchValue) ||
    product.category.toLowerCase().includes(searchValue);

  return matchesCategory && matchesSearch;
});

  return (
    <div className="products-page">

      {/* ================= PRODUCTS HERO ================= */}

<section className="products-hero-section">

  <div className="products-hero-container">

    <div className="products-hero-content">

      <span className="products-hero-badge">
        ✨ PRODUCTS CATALOG
      </span>

      <h1>
        Professional Products for
        <span> Training Institutes & Students</span>
      </h1>

      <p>
        Explore our complete range of institute kits, student materials,
        qualification products, championship resources and professional stationery.
      </p>

      <div className="products-search-box">

        <span className="products-search-icon">
          🔍
        </span>

        <input
  type="text"
  value={searchTerm}
  onChange={(event) =>
    setSearchTerm(event.target.value)
  }
  placeholder="Search products, kits or product code..."
/>

      </div>

      <div className="products-hero-stats">

        <div>
          <strong>10+</strong>
          <span>Product Types</span>
        </div>

        <div>
          <strong>6</strong>
          <span>Categories</span>
        </div>

        <div>
          <strong>✓</strong>
          <span>Quality Assured</span>
        </div>

      </div>

    </div>

  </div>

</section>


      {/* ================= PRODUCTS AREA ================= */}

<section className="products-main-section">

  <div className="products-main-container">

    {/* ================= CATEGORY FILTER ================= */}

    <div className="products-category-filter">

      <div className="products-category-label">
        <span className="products-category-icon">▦</span>

        <div>
          <strong>Product Category</strong>

          <small>
            Browse products by category
          </small>
        </div>
      </div>


      <div className="products-category-select-wrap">

        <select
          value={selectedCategory}
          onChange={(event) =>
            setSelectedCategory(event.target.value)
          }
          className="products-category-select"
        >

          {categories.map((category) => (
            <option
              key={category}
              value={category}
            >
              {category}
            </option>
          ))}

        </select>

        <span className="products-category-arrow">
          ▼
        </span>

      </div>

    </div>


    {/* ================= PRODUCTS CONTENT ================= */}

    <div className="products-content">

      <div className="products-content-header">

        <div>

          <span className="products-section-label">
            PRODUCTS
          </span>

          <h2>
            {selectedCategory}
          </h2>

        </div>


        <div className="products-sort">

          <select defaultValue="all">
            <option value="all">
              All Availability
            </option>

            <option value="available">
              Available
            </option>

            <option value="unavailable">
              Unavailable
            </option>
          </select>


          <select defaultValue="newest">
            <option value="newest">
              Newest
            </option>

            <option value="oldest">
              Oldest
            </option>

            <option value="name">
              Name
            </option>
          </select>

        </div>

      </div>


      {/* ================= PRODUCT RESULTS ================= */}

<div className="products-results">

  <div className="products-results-info">
    Showing <strong>{filteredProducts.length}</strong> products
  </div>

  {filteredProducts.length > 0 ? (

    <div className="products-grid">

      {filteredProducts.map((product) => (

        <article
          className="product-card"
          key={product.id}
        >

          <div className="product-card-image">

  {product.image ? (
    <img
      src={product.image}
      alt={product.name}
      className="product-card-img"
    />
  ) : (
    <div className="product-image-placeholder">
      <span>PRODUCT</span>
    </div>
  )}

</div>

          <div className="product-card-content">

            <span className="product-card-category">
              {product.category}
            </span>

            <h3>
              {product.name}
            </h3>

            <p>
              {product.description}
            </p>

            <div className="product-card-footer">

              <span className="product-status">
                ● Available
              </span>

              <Link
  to={`/products/${product.id}`}
  className="product-view-button"
>
  View Details →
</Link>

            </div>

          </div>

        </article>

      ))}

    </div>

  ) : (

    <div className="products-empty-state">

      <div className="products-empty-icon">
        ◇
      </div>

      <h3>
        No products found
      </h3>

      <p>
        Try another product name or category.
      </p>

    </div>

  )}

</div>

    </div>

  </div>

</section>

    </div>
  );
}

export default ProductsPage;