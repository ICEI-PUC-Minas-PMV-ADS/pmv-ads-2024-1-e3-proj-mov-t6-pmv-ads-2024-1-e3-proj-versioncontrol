const express = require('express');
const multer = require('multer');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const porta = 3001; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const pastaUploads = path.join(__dirname, 'uploads');
if (!fs.existsSync(pastaUploads)) {
  fs.mkdirSync(pastaUploads);
}

const armazenamento = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pastaUploads);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload = multer({ storage: armazenamento });

app.post('/uploads', upload.single('file'), (req, res) => {
  const arquivo = req.file;
  console.log('Arquivo recebido:', arquivo);
  if (!arquivo) {
    console.log('Nenhum arquivo foi enviado.');
    return res.status(400).send('Nenhum arquivo foi enviado.');
  }
  res.send({ message: 'Arquivo enviado com sucesso.', arquivo });
});

app.get('/arquivos', (req, res) => {
  fs.readdir(pastaUploads, (err, arquivos) => {
    if (err) {
      console.log('Erro ao listar arquivos:', err);
      return res.status(500).send('Erro ao listar arquivos.');
    }
    console.log('Lista de arquivos:', arquivos);
    res.send(arquivos);
  });
});

app.listen(porta, () => {
  console.log(`Servidor rodando em http://localhost:${porta}`);
});
