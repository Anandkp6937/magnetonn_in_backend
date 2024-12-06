const {Pool}=require('pg');
const pool = new Pool({
     connectionString: process.env.DATABASE_URL,
     ssl: {
       rejectUnauthorized: false,
     },
   });

pool.connect((err,res)=>{     
     if(err){
          console.log('error occured:',err);
     }
})
module.exports={pool}
