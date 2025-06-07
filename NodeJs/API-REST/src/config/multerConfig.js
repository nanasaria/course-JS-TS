import multer from "multer";
import { extname, resolve } from "path";

const aleatorio = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, cb) => {
    if (file.mimetype !== "image/png" && file.mimetype !== "image/jpeg") {
      return cb(new multer.MulterError("Arquivo precisa ser PNG ou JPEG"));
    }

    return cb(null, true);
  },
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      /*
      Caminho para salvar os arquivos.
      O primeiro parâmetro do cb (callback) é a mensagem
      caso dê erro. O segundo parâmetro é o caminho da
      pasta para salvar os arquivos.
      */
      cb(null, resolve(__dirname, "..", "..", "uploads", "images"));
    },
    /*
    O filename decide qual será o nome dos arquivos.
    O primeiro parâmetro é a mensagem de erro e o
    segundo é o nome.
    Nesse caso, passamos a data atual e a extensão do
    arquivo.
    */
    filename: (req, file, cb) => {
      /*
      O extname retorna a extensão do arquivo,
      recebe o nome do arquivo utilizando o argumento
      file da filename.
     */
      cb(null, `${Date.now()}_${aleatorio()}${extname(file.originalname)}`);
    },
  }),
};
