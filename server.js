const express=require('express');
const app=express();
const PORT=process.env.PORT || 8000;
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());
const {displayAllPosts,addNewPost,subcriber}=require('./controller');


app.get('/',displayAllPosts);
app.post('/addnewpost',addNewPost);
app.post('/subscribe',subcriber);

app.listen(PORT,()=>{
     console.log(`server running on PORT:${PORT}`);
})
module.exports=app;