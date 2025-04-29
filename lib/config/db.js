import mongoose from "mongoose";

export const ConnectDB = async () => {
    await mongoose.connect('mongodb+srv://aalimarier:vampireteeth@cluster0.jcswwu0.mongodb.net/blogproject')
    console.log("DB Connected");
}