import React from 'react';
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from './Component/Products/Products'
import Recipes from "./component/Recipes/Recipes";
import CartItems from './component/CartItems/CartItems'
import FavItems from './component/FavItems/FavItems'
import RecipeSingleDetails from './component/Recipes/RecipeSingleDetails'
import NotFound from './NotFound'
const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/products" element={<Products />} />
                <Route path="/recipes" element={<Recipes />} />
                <Route path="/cartItems" element={<CartItems />} />
                <Route path='/recipes/:id' element={<RecipeSingleDetails />} />
                <Route path="/favItems" element={<FavItems />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    );
}
export default App;