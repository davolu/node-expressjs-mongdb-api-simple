exports.createPostValidator = (req, res, next)=>{

    //title
    req.check("title","write a title").notEmpty()
    req.check("title","Title must be between 4 and 150 characters").isLength({

        min: 4,
        max:150
    })

     //body
     req.check("body","write a body").notEmpty()
     req.check("body","Body must be between 4 and 2000 characters").isLength({
 
         min: 4,
         max:2000
     })
 
   //handle errors
      
   const errors = req.validationErrors()
    if(errors){
        const theError = errors.map( (err)=>err.msg)[0]

        return res.status(400).json({error:theError})
    }
 

    next()
}