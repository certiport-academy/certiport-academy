import React from "react";
import { Link, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { productId } = useParams();

  const product = products.find(
    (item) => item.id === productId
  );

  if (!product) {
    return (
      <div className="product-details-page">
        <h1>Product Not Found</h1>
        <p>
          The requested product could not be found.
        </p>
      </div>
    );
  }

  return (
    <div className="product-details-page">

      {/* PRODUCT BREADCRUMB */}

      <div className="product-details-breadcrumb">

        <Link to="/products">
          Products
        </Link>

        <span> / </span>

        <span>{product.category}</span>

        <span> / </span>

        <strong>{product.name}</strong>

      </div>


      {/* PRODUCT MAIN */}

      <div className="product-details-container">

        <div className="product-details-image">

          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
            />
          ) : (
            <div>
              PRODUCT
            </div>
          )}

        </div>


        <div className="product-details-info">

          <span className="product-details-category">
            {product.category}
          </span>

          <h1>
            {product.name}
          </h1>

          <p>
            {product.description}
          </p>

          <span className="product-details-status">
            ● Available
          </span>

        </div>

      </div>


      {/* PRODUCT OVERVIEW */}

      <div className="product-details-overview">

        <h2>
          Product Overview
        </h2>

        <p>
          {product.description}
        </p>

      </div>

    </div>
  );
}

export default ProductDetails;