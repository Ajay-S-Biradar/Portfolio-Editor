const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors')

const PORT = 2004;

const workRoutes = require('./routes/workRoutes');
const aboutRoutes = require('./routes/aboutRoutes');
const introRoutes = require('./routes/introRoute');
const skillRoutes = require('./routes/skillRoutes');

const connectDB = require('./config/connectDB');

//connectDB 
connectDB();
//Routes here

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send("Working...");
})

app.get('/api/assistant',(req,res)=>{
    res.send("Api Working..");
})

app.use('/api/assistant/work',workRoutes);
app.use('/api/assistant/skill',skillRoutes);
app.use('/api/assistant/about',aboutRoutes);
app.use('/api/assistant/intro',introRoutes);

app.listen(PORT,()=>{
    console.log("Running at port- ",PORT);
})