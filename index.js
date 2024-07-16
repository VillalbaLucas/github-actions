import express from 'express';

const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('GitHub Actions!')
})

app.listen(PORT, (req, res) => {
    console.log(`Listen in port localhost:${PORT}`);
})

