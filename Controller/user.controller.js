// const connection = require("../DBConfig/DB.config")
const bcrypt = require('bcryptjs')
const User = require("../Model/User");
// const Card = require("../Model/User");


// async function queryExecute(query,res){
//    await connection.query(query, (err, results) => {
//         if (err) {
//             // console.error('Error executing query:', err.stack);
//             res.status(400).json({
//                 success:false,
//                 error:err
//             })
//             return;

//         }
//         console.log('Results:', results);
//         return results
//     });
// }

exports.getAllUser = async(req,res)=>{
        User.getAll((err, results) => {
          if (err) return res.status(500).send(err);
          
          res.status(200).json({
            success:true,
            user:results
          })
        });
}


exports.register = async(req,res)=>{
    User.emailCheck(req.body,async (err,results)=>{
        if (err) return res.status(500).send(err);

        if(results.length){
        return res.status(400).json({
            success:false,
            user:results
        })
        }

        const password = await bcrypt.hash(req.body.password,12)


        User.create({...req.body,password},(err,results)=>{
            if (err) return res.status(500).send(err);
            res.status(200).json({
                success:true,
                user:results
            })
        })

    })

    
}