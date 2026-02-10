const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000
const DBURL = process.env.MONGO_URL
const {route} = require("./routes/userRoute")
app.use(cors());
mongoose.connect(DBURL)
    .then(() => {
        console.log("DB Rah Connected Sf kml")
        app.listen(PORT , (req,res) => {
            console.log(`Server rah cha3l f had end point http://localhost:${PORT}`)
        })
    }).catch((err) => console.error(err)) 

app.use(cors());
app.use(express.json());
app.use('/api', route);
