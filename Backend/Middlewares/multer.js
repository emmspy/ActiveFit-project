import multer from 'multer';

// Configurar almacenamiento en memoria
const storage = multer.memoryStorage(); 

const upload = multer({ storage });

export default upload;
