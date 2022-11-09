
import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/',(req,res) => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => res.json(data))
});

app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
});
