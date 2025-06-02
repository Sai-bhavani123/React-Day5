import React from 'react'
import { recipes } from './data'
import { useParams } from 'react-router-dom'
import './RecipeSingleDetails.css' // Import the CSS file

const RecipeSingleDetails = () => {
    const params = useParams()
    const matchedRecipe = recipes.recipes.find((x) => x.id === Number(params.id))

    return (
        <div className="recipe-container">
            <h1 className="recipe-title">Recipe Details</h1>
            {matchedRecipe !== undefined ? (
                <div className="recipe-content">
                    <img 
                        src={matchedRecipe.image} 
                        alt={matchedRecipe.name}
                        className="recipe-image"
                    />
                    <p className="recipe-name">{matchedRecipe.name}</p>
                    
                    <div className="recipe-section">
                        <h2 className="section-title">Ingredients</h2>
                        <ol className="recipe-list">
                            {matchedRecipe.ingredients.map((ingredient, index) => (
                                <li key={index} className="recipe-list-item">{ingredient}</li>
                            ))}
                        </ol>
                    </div>
                    
                    <div className="recipe-section">
                        <h2 className="section-title">Instructions</h2>
                        <ol className="recipe-list">
                            {matchedRecipe.instructions.map((instruction, index) => (
                                <li key={index} className="recipe-list-item">{instruction}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            ) : (
                <p className="not-found-message">No recipe found with that ID</p>
            )}
        </div>
    )
}

export default RecipeSingleDetails