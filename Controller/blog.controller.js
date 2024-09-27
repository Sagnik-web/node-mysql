const Blog = require("../Model/Blog")

exports.createBlog = async(req,res)=>{
    Blog.create(req.body,(err,result)=>{
        if(err) return res.status(500).json({success:false,error:err})

        res.status(200).json({
            success:true,
            blog:result
        })
    })
}



exports.getAllBlogs = async(req,res)=>{
    Blog.getAll((err,result)=>{
        if(err) return res.status(500).json({success:false,msg:"Blog Created Successfully."})
        
            res.status(200).json({
                success:true,
                blog:result
            })
    })
}

