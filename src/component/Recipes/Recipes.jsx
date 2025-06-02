import React from 'react'
import "./Recipes.css"
import { recipes } from './data'
import Recipe from './Recipe'
const Recipes = () => {
  return (
    <div className='recipesAll'>
        {recipes.recipes.map((recipe,index)=>{
           return (
            <> 
                <Recipe singleR={recipe}/>
            </>
           )
        })}
    </div>
  )
}

export default Recipes