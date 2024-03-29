const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const usersRoute = require('./routes/users');

const PORT = process.env.PORT || 3000;

//middlewares
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
app.use('/api/users',usersRoute);

//connect to mongodb atlas
mongoose
    .connect(
        process.env.MONGO_URL,
        {useNewUrlParser:true}
    )
    .then(() => {
        console.log("Connected to mongodb atlas");
    }).catch(error => {
        console.log("Something wrong with database connection", error);
    })

//start server
app.listen(PORT, () => {
    console.log("Server started at PORT ",PORT);
});