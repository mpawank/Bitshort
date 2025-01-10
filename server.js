import express from "express";
import mongoose from "mongoose";
import {shortUrl , getOriginalUrl} from './Controllers/url.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
mongoose.connect('mongodb+srv://mpawank:9PKQ9nnLdWeaHNjV@cluster0.dwtfm.mongodb.net/', {dbName:'Nodejs_course'}).then(() => {console.log('Connected to MongoDB')}).catch((err) => console.log('Error connecting to MongoDB', err))
app.get("/",(req,res)=>{
    res.render('index.ejs',{shortUrl: ''});
})

//shorting url logic

app.post('/short', shortUrl);
//redirecting to original url :- dynamic routing
app.get('/:shortCode',getOriginalUrl);

const port = 3000;
app.listen(port, () => {console.log(`Server running at http://localhost:${port}/`)});