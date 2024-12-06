const {pool}=require('./modal');

function displayAllPosts(req,res){

     let q='SELECT * FROM posts';
     pool.query(q,(err,dataResult)=>{
          if(err){
               console.log(err);
          }
          else{
               console.log(dataResult.rows);
               res.json(dataResult.rows)
          }
     })
}

function addNewPost(req,res){
     let {Title,Description,URL,CreatedOn,Catagory}=req.body;
     let q=`INSERT INTO posts (title,description,date,url,category) VALUES($1,$2,$3,$4,$5) RETURNING *`;
     pool.query(q,[Title,Description,CreatedOn,URL,Catagory],(err,dataResult)=>{
          if(err){
               console.log(err);
          }
          else{
               console.log(dataResult.rows);
               res.send('uploaded sucessfully')
          }
     })

}

module.exports={displayAllPosts,addNewPost};