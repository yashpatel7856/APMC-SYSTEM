const connectToDb = require('./db.js');
const express = require('express')
const Router = require('./routes/api/users')
const LoginRout = require('./routes/api/login_signup');
const BrokerInfo = require('./routes/api/getBroker');
const addVegi = require('./routes/api/addVeg');
const findVegi = require('./routes/api/findveg');
const buyVeg = require('./routes/api/buyVeg');
const reset = require('./routes/api/resetPass.js');
const hist = require('./routes/api/history.js');

connectToDb();
const app = express()
const port = 3001

app.use('/', BrokerInfo);
app.use('/', LoginRout);
app.use('/', addVegi);
app.use('/', findVegi);
app.use('/', buyVeg);
app.use('/',reset);
app.use('/',hist);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.post("/",(req,res)=>{
  res.send(res);
})

