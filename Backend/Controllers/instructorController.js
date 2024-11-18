import bcrypt from 'bcrypt'
import validator from "validator"
import { v2 as cloudinary } from 'cloudinary'
import instructorModel from '../Models/instructorModel.js'

//guardar instructor

const addInstructor = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const imageFile = req.file;

        console.log({ name, email, password }, imageFile);

        if (!name || !email || !password) {
            return res.json({ success: false, message: "Missing details" });
        }

        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Email is not valid" });
        }

        if (password.length < 8) {
            return res.json({ success: false, message: "Password must have more than 8 characters" });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Subir imagen a Cloudinary
        let imageUrl = ""; 

       if (imageFile) {
            try {
                const imageUpload = await cloudinary.uploader.upload(imageFile.path, {
                    resource_type: 'image'
                });

                imageUrl = imageUpload.secure_url;
                console.log('Image URL:', imageUrl);
            } catch (error) {
                console.error('Cloudinary Upload Error:', error);
                return res.status(500).json({ success: false, message: 'Failed to upload image' });
            }
        } else {
            return res.status(400).json({ success: false, message: "Image file is required" });
        }


        // Guardar en la base de datos
        const instructorData = {
            name,
            email,
            password: hashedPassword,
            image: imageUrl 
        };

        const newInstructor = new instructorModel(instructorData);
        await newInstructor.save();

        res.json({ success: true, message: 'Instructor guardado :D' });
    } catch (error) {
        console.error(error);
        res.json({ success: false, message: error.message });
    }
};

export { addInstructor };
