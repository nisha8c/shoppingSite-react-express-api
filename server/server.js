
import express from 'express';
import fetch from 'node-fetch';
import bodyParser from 'body-parser';
import cors from 'cors';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const api = 'https://fakestoreapi.com/products';
// const imgUrl = 'https://fakestoreapi.com/img';


app.get('/',(req,res) => {
    fetch(api)
        .then(res => res.json())
        .then(data => res.json(data))
});

app.get('/products/:id',(req,res) => {
    fetch(`${api}/${req.params.id}`)
    .then(res => res.json())
    .then(data => res.json(data))

    // .then(product => res.json(product))
});

// app.get('/img/:id',(req,res) => {
//     console.log('img:', req.params.id)
//     fetch(`${imgUrl}/${req.params.id}`)
//     .then(res => res.json())
//     .then(data => {
//         const products = data;
//         })
// });


app.listen(5000,() => {
     console.log(`app is listening to port 5000`);
});
