const express = require('express');
// const cors = require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const path = require('path')

// config dot env file
dotenv.config();

//database call
connectDB();

//rest object
const app = express();

//middlewares
app.use(morgan('dev'));
app.use(express.json());
// app.use(cors);

//routes

//user routes
app.use('/users',require('./routes/userRoute'));

//transaction routes
app.use('/transactions',require('./routes/transactionRoutes'));

// static files
app.use(express.static(path.join(__dirname,'./client/build')))
app.get('*',function (req,resp){
    resp.sendFile(path.join(__dirname,'./client/build/index.html'))
})

//port
const PORT = 8080 || process.env.PORT 

//listening
app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
});

