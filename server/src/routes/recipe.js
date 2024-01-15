import express from "express";
import mongoose from "mongoose";
import { RecipeModel } from "../models/Recipes.js";
import { UserModel } from "../models/Users.js";
import { verifyToken } from "./users.js";

const router = express.Router();

//get a list of recipe
router.get("/", async (req, res) => {
    try {
        const response = await RecipeModel.find({});
        res.json(response);
    } catch (error) {
        res.json(error)
    }
});

//create a recipe
router.post("/", verifyToken, async (req, res) => {
    const recipe = new RecipeModel(req.body);
    try {
        const response = await recipe.save();
        res.json(response);
    } catch (error) {
        res.json(error)
    }
});

//save a recipe
router.put("/", verifyToken, async (req, res) => {
    try {
        const recipe = await RecipeModel.findById(req.body.recipeID);
        const user = await UserModel.findById(req.body.userID);
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({ savedRecipes: user.savedRecipes });
    } catch (error) {
        res.json(error)
    }
});

//get id of recipe
router.get("/savedRecipes/ids/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        res.json({ savedRecipes: user?.savedRecipes });
    } catch (error) {
        res.json(error);
    }
});

//get saved recipe
router.get("/savedRecipes/:userID", async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.userID);
        const savedRecipes = await RecipeModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json({ savedRecipes });
    } catch (error) {
        res.json(error);
    }
});

//get recipe created by the user only
router.get('/user/:userOwnerId', async (req, res) => {
    const userOwnerId = req.params.userOwnerId;

    try {
        const recipes = await RecipeModel.find({ userOwner: userOwnerId });
        const recipeCount = recipes.length;

        if (recipeCount === 0) {
            return res.status(404).json({ message: 'No recipes found for this userOwner.' });
        }

        // Create an object containing both recipes and recipeCount
        const responseData = {
            recipes: recipes,
            recipeCount: recipeCount
        };

        res.json(responseData);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});




export { router as recipesRouter };