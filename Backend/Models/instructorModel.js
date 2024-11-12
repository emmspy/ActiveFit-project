import mongoose from "mongoose";

const instructorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, required: true }
});

const instructorModel = mongoose.model("instructor", instructorSchema);
export default instructorModel;