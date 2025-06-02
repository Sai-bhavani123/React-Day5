import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Recipe.css'; // External CSS file

const Recipe = ({ singleR }) => {
  const navigate = useNavigate();
  
  return (
    <div className="recipe-card">
      <div className="recipe-image-container">
        <img 
          src={singleR.image} 
          alt={singleR.name} 
          className="recipe-image"
        />
      </div>
      
      <div className="recipe-content">
        <h3 className="recipe-title">{singleR.name}</h3>
        <p className="recipe-cuisine">{singleR.cuisine}</p>
        
        <button 
          className="view-more-btn"
          onClick={() => navigate(`/recipes/${singleR.id}`)}
        >
          View More
        </button>
      </div>
    </div>
  );
};

export default Recipe;