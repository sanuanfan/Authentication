import { error } from "console";
import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;
        connection.on('connected', () => {
            console.log("Connected Successfully");
        })
        connection.on('error', (err) => {
            console.log("Connection Error please make sure your database is connected" + err);
            process.exit();
        });
    } catch (error) {
        console.log("Database connection error" + error);
    }
}