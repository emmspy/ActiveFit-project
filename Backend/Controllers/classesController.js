import mongoose from "mongoose";
import classModel from "../Models/classesModel.js";
import instructorModel from "../Models/instructorModel.js";

const addClass = async (req, res) => {
    console.log("Crear una nueva clase");
    try {
        const { name, excercise, price, address, image, description, instructorId } = req.body;
        console.log("Instructor ID recibido:", instructorId);
        console.log("Cuerpo de la solicitud:", req.body);
        

        // Validar el formato del ID del instructor
        if (!mongoose.Types.ObjectId.isValid(instructorId)) {
            return res.status(400).json({ message: "Invalid instructor ID format" });
        }

        // Verificar si el instructor existe
        const instructor = await instructorModel.findById(instructorId);
        if (!instructor) {
            return res.status(404).json({ message: "Instructor not found" });
        }

        // Crear la nueva clase
        const classData = {
            name,
            excercise,
            price,
            address,
            image,
            description,
            instructor: instructor._id,
        };

        const newClass = new classModel(classData);
        await newClass.save();

        return res.status(201).json({ success: true, message: 'Clase creada con éxito', class: newClass });

    } catch (error) {
        console.error("Error al crear la clase:", error);
        return res.status(500).json({ success: false, message: "Internal server error" });
    }
};

export { addClass };
