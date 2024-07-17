import express from 'express';
import { indexRouter } from './routes/index.js';


const PORT = 3000;
const app = express();

app.use('/', indexRouter);

app.listen(PORT, (req, res) => {
    console.log(`Listen in port localhost:${PORT}`);
})

