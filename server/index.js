const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const dishRouter = require('./routes/dish')
const categoryRouter = require('./routes/category')

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/dish",dishRouter);
app.use("/category",categoryRouter);

app.listen(3001,(req,res)=>{
    console.log("listening on port 3001");
})