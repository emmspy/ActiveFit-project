import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}activefit`, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Database connected :D");
        console.log("MongoDB URI:", process.env.MONGODB_URI);

    } catch (error) {
        console.error("Database connection failed D: :", error.message);
        // Salir del proceso si falla la conexión
        process.exit(1); 
    }

};

export default connectDB;
