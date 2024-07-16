import express from 'express';
import {v1 as uuidv1} from 'uuid'


const PORT = 3000;
const app = express();

app.get('/', (req, res) => {
    res.send('GitHub Actions!')
})

app.get('/actions', (req, res) => {
    res.json({
        'id': uuidv1(),
        'actions': 'UUID'
    })
})

app.listen(PORT, (req, res) => {
    console.log(`Listen in port localhost:${PORT}`);
})

