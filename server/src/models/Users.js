import mongoose, { mongo } from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    savedRecipes: [{type: mongoose.Schema.Types.ObjectId, ref: "recipe"}]
});

export const UserModel = mongoose.model("users", UserSchema);