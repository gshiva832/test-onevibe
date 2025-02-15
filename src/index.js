const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');
const collection = require('./mongodb');
const userRouter = require('./routes/user.route')
const celbRouter = require('./routes/celebrity.router')
const industryRouter = require('./routes/industry.router');
const serviceRouter = require('./routes/service.router');

const app = express();
const tempelatePath = path.join(__dirname, './public/tempelates');
const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', tempelatePath);


app.post('/signup', async (req, res) => {
  const data = {
    name: req.body.name,
    password: req.body.password,
  };
  await collection.insertMany([data]);

  res.render('home');
});


app.post('/login', async (req, res) => {
    
    try{
        const check = await collection.findOne({name:req.body.name})

        if(check.password === req.body.password){
            res.render('home');
        }
        else {
            res.send("wrong password")
        }
    }catch{
        res.send('wrong details')
    }
  
    
  });


app.use('/user',userRouter)
app.use('/celbrity',celbRouter)
app.use('/industry',industryRouter)
app.use('/service',serviceRouter)
app.use('/users',userRouter)
app.use('/',userRouter)
app.use('/',userRouter)

app.get('/', (req, res) => {
  res.render('login');
});

app.get('/signup', (req, res) => {
  res.render('signup');
});

const port = 3000;
app.listen(port, () => {
  console.log('Server started!');
});
