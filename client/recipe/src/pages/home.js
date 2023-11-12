import { useEffect, useState } from "react";
import axios from "axios";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import RecipeReviewCard from "../components/recipeCard";

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
        <div>
            <ul>
                {recipe.map((recipe) => (
                    // <li key={recipe.id}>
                    //     <div>
                    //         <h2>{recipe.name}</h2>
                    //         <button
                    //             onClick={() => saveRecipe(recipe._id)}
                    //             disabled={isRecipeSaved(recipe._id)}
                    //         >
                    //             {isRecipeSaved(recipe._id) ? "Saved" : "Save"}
                    //             {/* save */}
                    //         </button>
                    //     </div>
                    //     <div className="instructions">
                    //         <p>{recipe.instruction}</p>
                    //     </div>
                    //     <img src={recipe.imageUrl} alt={recipe.name} />
                    //     <p> Cooking Time: {recipe.cookingTime} (minutes)</p>
                    // </li>
                    <RecipeReviewCard 
                        title= {recipe.name}
                        cookingTime={recipe.cookingTime}
                        imageUrl={recipe.imageUrl}
                        isRecipeSaved={isRecipeSaved}
                        recipe={recipe}
                        saveRecipe={saveRecipe}
                        description= {recipe.description}
                        instruction= {recipe.instruction}
                        ingredients= {recipe.ingredient}
                        />
                )
                )}
            </ul>
        </div>
    )
}