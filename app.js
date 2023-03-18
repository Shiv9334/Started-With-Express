const http = require('http');
const express = require('express');
const { text } = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({extended : false}));


app.use('/add-product',(req,res,next) => {
    console.log('add-product');
    res.send('<form action="/product" method ="POST"><input type="text" name ="title"><button type = "submit">Add product</button></input></form> ');
})
app.use('/product',(req,res, next) => {
    console.log(req.body);
    res.redirect('/')
})
app.use('/', (req, res, next) => {
    console.log('This always runs');
   res.send('Welcome to express js page');
    next();
})


const server = http.createServer(app);

server.listen(8000);