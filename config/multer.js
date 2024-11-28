import multer from 'multer';
import { v2 as cloudinary } from 'cloudinary';
import { CloudinaryStorage } from 'multer-storage-cloudinary';

// Configurando o Cloudinary com suas credenciais
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

// Configurando o armazenamento no Cloudinary usando multer-storage-cloudinary
const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'uploads',  // Pasta onde os arquivos serão armazenados no Cloudinary
        format: async (req, file) => {
            // Define dinamicamente o formato do arquivo com base no tipo MIME
            const format = file.mimetype.split('/')[1];
            return format;  // Retorna o formato correto do arquivo
        },
        public_id: (req, file) => {
            // Define o nome do arquivo usando o timestamp e o nome original
            return Date.now() + '-' + file.originalname.split('.')[0];
        },
    },
});

// Função de validação para garantir que apenas tipos permitidos sejam aceitos
const upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        const allowedMimeTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
        if (allowedMimeTypes.includes(file.mimetype)) {
            cb(null, true);
        } else {
            cb(new Error('Tipo de arquivo não suportado!'), false);
        }
    }
});

export default upload;