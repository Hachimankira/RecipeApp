import axois from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";
import Button from '@mui/material/Button';


export const CreateRecipe = () => {
    const userID = useGetUserID();
    const [cookies, _] = useCookies(["access_token"]);

    // console.log(userID);
    const [recipe, setRecipe] = useState({
        name: "",
        ingredients: [],
        instructions: "",
        imageUrl: "",
        cookingTime: 0,
        userOwner: userID,
    });

    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setRecipe({ ...recipe, [name]: value });
    };

    const handleingredientsChange = (event, index) => {
        const { value } = event.target;
        const ingredients = [...recipe.ingredients];
        ingredients[index] = value;
        setRecipe({ ...recipe, ingredients });
    };

    const handleAddingredients = () => {
        const ingredients = [...recipe.ingredients, ""];
        setRecipe({ ...recipe, ingredients });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axois.post(
                "http://localhost:3001/recipes",
                { ...recipe },
                { headers: { authorization: cookies.access_token } }
            );
            alert("Recipe Created!");
            navigate("/");
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
    <div className="create-recipe">
        <h2>Create a Recipe</h2>
        <form onSubmit={handleSubmit}>

            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={recipe.name}
                    onChange={handleChange}
                />
            </div>

            {/* Uncomment if you want to include a description */}
            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={recipe.description}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="ingredients">Ingredients</label>
                {recipe.ingredients.map((ingredient, index) => (
                    <input
                        key={index}
                        type="text"
                        name="ingredients"
                        value={ingredient}
                        onChange={(event) => handleingredientsChange(event, index)}
                    />
                ))}
                <Button variant="outlined" className="createRecipe-btn" type="button" onClick={handleAddingredients}>
                    Add Ingredient
                </Button>
            </div>

            <div className="form-group">
                <label htmlFor="instructions">Instructions</label>
                <textarea
                    id="instructions"
                    name="instructions"
                    value={recipe.instructions}
                    onChange={handleChange}
                ></textarea>
            </div>

            <div className="form-group">
                <label htmlFor="imageUrl">Image URL</label>
                <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    value={recipe.imageUrl}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="cookingTime">Cooking Time (minutes)</label>
                <input
                    type="number"
                    id="cookingTime"
                    name="cookingTime"
                    value={recipe.cookingTime}
                    onChange={handleChange}
                />
            </div>

            <Button variant="contained" className="createRecipe-btn" type="submit">Create Recipe</Button>
        </form>
    </div>
</div>

        );
};