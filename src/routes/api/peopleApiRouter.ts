import express from 'express';
import PeopleController from '../../controllers/PeopleController.js';
import { idNotFound } from '../../middlewares/error.middleware.js';
import { upload } from '../../middlewares/uploadHandler.js';
// import { cdnUpload } from '../../middlewares/cdnUploadHandler.js';

const router = express.Router();

router.get('/', PeopleController.getAllPeople);
router.get('/:id', idNotFound, PeopleController.getPeopleById);
router.post('/', upload.single('file'), PeopleController.storePeople);
router.put(
  '/:id',
  idNotFound,
  upload.single('file'),
  PeopleController.updatePeople
);
router.delete('/:id', idNotFound, PeopleController.deletePeople);
router.post('/upload', upload.single('file'), PeopleController.uploadFile);
// router.post(
//   '/cdn-upload',
//   cdnUpload.single('file'),
//   PeopleController.cdnUploadImage
// );
export default router;
