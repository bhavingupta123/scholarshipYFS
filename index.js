const express = require('express')
const app = express();
const port = 8000;
const uniqid = require('uniqid');


app.get('/', (req, res) => {
   
    const { MongoClient, ObjectID } = require('mongodb'); 
    res.send(uniqid())
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});