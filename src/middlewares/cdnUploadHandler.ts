import multer from 'multer';

const storage = multer.memoryStorage();

export const cdnUpload = multer({ storage });
