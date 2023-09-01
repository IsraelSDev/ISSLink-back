import multer from 'multer';
import path from 'path';

const tmpFolder = path.resolve(__dirname, '..', '..', 'uploads');

export default multer({
  storage: multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      return cb(null, fileName);
    },
  }),
});
