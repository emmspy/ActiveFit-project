import mongoose from "mongoose";

const classSchema = new mongoose.Schema({
    name: { type: String, required: true },
    excercise: { type: String, required: true },
    price: { type: Number, required: true },
    address: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
    instructor: { type: mongoose.Schema.Types.ObjectId, ref: "Instructor", required: true },
    slots_booked: { type: Object, default: {} }
}, { minimize: false });

const classModel = mongoose.model("class", classSchema);
export default classModel;