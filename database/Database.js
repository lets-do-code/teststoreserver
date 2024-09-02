import mongoose from "mongoose";

export const DatabaseConnection = async (url) => {
    try {
        await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then((response) => {
            console.log("Database connected successfully")
        }).catch((error) => {
            console.log("Database connection error")
        })

    } catch (error) {
        console.log("Error connecting to database")
    }
}