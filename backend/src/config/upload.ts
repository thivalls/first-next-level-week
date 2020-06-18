import multer from 'multer';
import crypto from 'crypto';
import { resolve } from 'path';

const tempFolder = resolve(__dirname, '..', '..', 'uploads');

export default {
  storage: multer.diskStorage({
    destination: tempFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(6).toString('hex');
      const fileName = `${fileHash}-${file.originalname}`;

      return callback(null, fileName);
    },
  }),
};
