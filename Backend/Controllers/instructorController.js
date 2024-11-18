import bcrypt from 'bcrypt'
import validator from "validator"
import { v2 as cloudinary } from 'cloudinary'
import instructorModel from '../Models/instructorModel'

//Logica para agregar instructores

const addInstructor = async(req, res) => {
    try{
        const {name, email, password} = req.body
        const imageFile = req.file

        console.log({name, email, password}, imageFile)
//verificar que cada dato tenga un valor
        if(!name || !email || !password){
            return res.json({success:false, menssage:"missing details"})
        }
        //validar el formato de emial
        if (!validator.isEmail(email)){
            return res.json({success:false, menssage:"email is not valid"})
        }
        //validar password
        if(password.length < 8){
            return res.json({success:false, menssage:"password most have more than 8 characteres"})
            
        }

        //encriptar contraseña 
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        //subir la imagen a servicio de Cloudinary
        try {
            const imageUpload = await cloudinary.uploader.upload(imageFile.path, { resource_type: 'image' });
            const imageUrl = imageUpload.secure_url;
            console.log('Image URL:', imageUrl); // Log para verificar
        } catch (error) {
            console.error('Cloudinary Upload Error:', error);
            return res.status(500).json({ success: false, message: 'Failed to upload image' });
        }
        

        //guardar en la base de datos
        const instructorData = {
            name,
            email,
            password:hashedPassword,
            image:imageUrl
        }

        const newInstructor = new instructorModel(instructorData)
        await newInstructor.save()

        res.json({success:true, message:'instructor guardado'})

    } catch (error) {
        console.log(error)
        res.json({success:false, message:error.message})
    }
}

export {addInstructor}