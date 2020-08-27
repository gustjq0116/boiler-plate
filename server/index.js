const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/key');
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

app.use(cookieParser());


mongoose.connect(config.mongoURI,
{
    useNewUrlParser:true, useUnifiedTopology: true, userCreateIndex: true,
    useFindAndModify: false
}).then(() => console.log('MongoDB Connected....')).catch(err => console.log(err))



app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.get('/api/hello', (req, res) => {
  res.send('Hello Worasdld!')
})


//라우터들
app.use('/api/users', require('./routers/users'));


app.listen(port, () => {
  console.log(`Example app listening at ${port}`)
})