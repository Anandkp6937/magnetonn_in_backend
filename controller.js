const {pool}=require('./modal');

function displayAllPosts(req,res){

     let q='SELECT * FROM posts';
     pool.query(q,(err,dataResult)=>{
          if(err){
               console.log(err);
               res.json('message:some error occured');
          }
          else{
               console.log(dataResult.rows);
               res.json(dataResult.rows)
          }
     })
}

function addNewPost(req,res){  
     let {Title,Description,URL,CreatedOn,Catagory,Imageurl}=req.body;
     let q=`INSERT INTO posts (title,description,date,url,category,image_url) VALUES($1,$2,$3,$4,$5,$6) RETURNING *`;
     pool.query(q,[Title,Description,CreatedOn,URL,Catagory,Imageurl],(err,dataResult)=>{
          if(err){
               console.log(err);
          }
          else{
               res.json({message:'uploaded sucessfully'});
          }
     })

}
function subcriber(req,res){
     console.log(req.params);
     let {email}=req.body;
     let q=`INSERT INTO clients (email) VALUES($1)`;
     pool.query(q,[email],(err,result)=>{
          if(err){
               console.log(err);
               res.json({message:'user already exists'})
          }
          else{
               res.json({message:'new subsciber added'})
          }
     })
}
module.exports={displayAllPosts,addNewPost,subcriber};