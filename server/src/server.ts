import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes'; // Quando o arquivo não está no node_modules é necessário usar o caminho

const app = express();

app.use(cors());
app.use(express.json()); // Para o express entender que estamos utilizando JSON
app.use(routes);

app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads'))); // rota para as imagens

app.listen(3333); // Porta ara acessa o localhost