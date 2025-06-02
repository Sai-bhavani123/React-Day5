import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css"; // External styling

const Product = (props) => {
  const navigate = useNavigate();
  const { singleP } = props;

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img 
          src={singleP.thumbnail} 
          alt={singleP.title}
          className="product-image"
        />
        {singleP.rating && (
          <div className="product-rating">
            ⭐ {singleP.rating.toFixed(1)}
          </div>
        )}
      </div>

      <div className="product-content">
        <h3 className="product-title">{singleP.title}</h3>
        
        <div className="product-dimensions">
          <span>{singleP.dimensions.width} cm × </span>
          <span>{singleP.dimensions.height} cm</span>
        </div>

        <div className="product-tags">
          {singleP.tags.map((tag, index) => (
            <span key={index} className="product-tag">
              {tag}
            </span>
          ))}
        </div>

        <button 
          className="view-more-btn"
          onClick={() => navigate(`/products/${singleP.id}`)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Product;