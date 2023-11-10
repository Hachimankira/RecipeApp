import axois from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useGetUserID } from "../hooks/useGetUserID";
import { useCookies } from "react-cookie";


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
                <h2>Create Recipe</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={recipe.name}
                        onChange={handleChange}
                    />
                    {/* <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={recipe.description}
                    onChange={handleChange}
                ></textarea> */}
                    <label htmlFor="ingredients">ingredientss</label>
                    {recipe.ingredients.map((ingredients, index) => (
                        <input
                            key={index}
                            type="text"
                            name="ingredients"
                            value={ingredients}
                            onChange={(event) => handleingredientsChange(event, index)}
                        />
                    ))}
                    <button type="button" onClick={handleAddingredients}>
                        Add ingredients
                    </button>
                    <label htmlFor="instructions">Instructions</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={recipe.instructions}
                        onChange={handleChange}
                    ></textarea>
                    <label htmlFor="imageUrl">Image URL</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={recipe.imageUrl}
                        onChange={handleChange}
                    />
                    <label htmlFor="cookingTime">Cooking Time (minutes)</label>
                    <input
                        type="number"
                        id="cookingTime"
                        name="cookingTime"
                        value={recipe.cookingTime}
                        onChange={handleChange}
                    />
                    <button type="submit">Create Recipe</button>
                </form>
            </div>
        </div>);
};