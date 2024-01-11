import React, { useState, useEffect } from 'react';
import { useGetUserID } from '../hooks/useGetUserID';
import axios from "axios";

import { Grid } from '@mui/material';
import RecipeReviewCard from '../components/recipeCard';
import SimpleRecipeCard from '../components/simpleRecipeCard';

export const CreatedRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const userOwnerId = useGetUserID(); // Replace with the actual userOwner ID

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCreatedRecipes = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/recipes/user/${userOwnerId}`);
        setRecipes(response.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchCreatedRecipes();
  }, [userOwnerId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Grid container spacing={2} sx={{ padding: "24px" }}>
      {recipes.map((recipe) => (
        <Grid item xs={4} key={recipe.id}>
          <SimpleRecipeCard
            title={recipe.name}
            cookingTime={recipe.cookingTime}
            imageUrl={recipe.imageUrl}
            recipe={recipe}
            description={recipe.description}
            instruction={recipe.instruction}
            ingredients={recipe.ingredient}
          />
        </Grid>
      ))}
    </Grid>
  );
}