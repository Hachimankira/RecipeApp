import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import RecipeReviewCard from "../components/recipeCard";
import { Grid } from "@mui/material";
import SearchBar from "../components/search";

export const Home = () => {
    const userID = useGetUserID();
    const [recipe, setRecipe] = useState([]);
    const [savedRecipes, setSavedRecipes] = useState([]);
    const [cookies, _] = useCookies(["access_token"]);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const response = await axios.get("http://localhost:3001/recipes");
                setRecipe(response.data);
            } catch (error) {
                console.error(error);
            }
        }

        const fetchSavedRecipes = async () => {
            try {
                const response = await axios.get(
                    `http://localhost:3001/recipes/savedRecipes/ids/${userID}`
                );
                setSavedRecipes(response.data.savedRecipes);
            } catch (error) {
                console.log(error);
            }
        };

        fetchRecipe();
        if (cookies.access_token)
            fetchSavedRecipes();
    }, []);

    const saveRecipe = async (recipeID) => {
        try {
            const response = await axios.put(
                "http://localhost:3001/recipes",
                { recipeID, userID },
                { headers: { authorization: cookies.access_token } }
            );
            setSavedRecipes(response.data.savedRecipes)
        } catch (error) {
            console.log(error);
        }
    }

    const isRecipeSaved = (id) => savedRecipes.includes(id);

    return (
        <>
            <SearchBar />
            <Grid container spacing={2} sx={{ padding: "24px" }}>
                {recipe.map((recipe) => (
                    <Grid item xs={4} key={recipe.id}>
                        <RecipeReviewCard
                            title={recipe.name}
                            cookingTime={recipe.cookingTime}
                            imageUrl={recipe.imageUrl}
                            isRecipeSaved={isRecipeSaved}
                            recipe={recipe}
                            saveRecipe={saveRecipe}
                            description={recipe.description}
                            instruction={recipe.instruction}
                            ingredients={recipe.ingredient}
                        />
                    </Grid>
                ))}
            </Grid>
        </>

    )
}