const Post = require('../models/post');


exports.getPosts = (req,res)=> {
    
    const post = Post.find().select('_id title body')
    .then((result)=>{

        res.status(200).json({posts: result})
    })
    .catch((error)=>{

        res.status(400).json({error: error})

    })

}


exports.createPost = (req,res) =>{
   
    const post = new Post(req.body)
    post.save().then( (result) => {

        res.status(200).json({
            post:result
        })

    })



 
}

 