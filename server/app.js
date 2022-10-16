require('dotenv').config();

const express=require(`express`);
const mongoose=require('mongoose');
const cors=require(`cors`);
const routes= require("./routes/routes.js");
const bodyParser=require("body-parser");
const multer=require("multer");



const app= express();

const PORT= process.env.PORT|| 4000;



//middleware

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));








mongoose.connect(process.env.DB_URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=> console.log("Connected to Database"))
.catch((err) => console.log(err));



//routes

app.use("/api/post",routes);

if(process.env.NODE_ENV ==='production'){
    app.use(express.static(__dirname+'/dist/'));
    app.get('*',(req,res)=>{
        res.sendFile(__dirname+'/dist/index.html');
    });
}


app.listen(PORT, ()=> console.log(`server running at port ${PORT}`));
