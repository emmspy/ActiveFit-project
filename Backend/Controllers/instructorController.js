import bcrypt from 'bcrypt';
import validator from 'validator';
import { v2 as cloudinary } from 'cloudinary';
import instructorModel from '../Models/instructorModel.js';

//crear un instructor
const addInstructor = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const imageFile = req.file;

        console.log({ name, email, password }, imageFile);

        if (!name || !email || !password) {
            return res.status(400).json({ success: false, message: 'Missing details' });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ success: false, message: 'Email is not valid' });
        }

        if (password.length < 8) {
            return res.status(400).json({ success: false, message: 'Password must have more than 8 characters' });
        }

        // Encriptar contraseña
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        if (imageFile) {
            try {
                const result = await new Promise((resolve, reject) => {
                    const stream = cloudinary.uploader.upload_stream(
                        { resource_type: 'auto' },
                        (error, result) => {
                            if (error) return reject(error);
                            resolve(result);
                        }
                    );
                    stream.end(imageFile.buffer);
                });

                const instructorData = {
                    name,
                    email,
                    password: hashedPassword,
                    image: result.secure_url,
                };

                const newInstructor = new instructorModel(instructorData);
                await newInstructor.save();

                return res.status(201).json({ success: true, message: 'Instructor creado con éxito' });
            } catch (error) {
                console.error('Cloudinary Upload Error:', error);
                return res.status(500).json({ success: false, message: 'Failed to upload image' });
            }
        } else {
            return res.status(400).json({ success: false, message: 'Image file is required' });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, message: error.message });
    }

};

export { addInstructor };

