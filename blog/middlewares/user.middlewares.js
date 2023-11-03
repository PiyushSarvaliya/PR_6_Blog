const scheck = (req , res , next) =>{
    let {username , password , email , role} = req.body

    if(username || password || email || role){
        next()
    }
    else{
        res.send({message : "All fields required"})
    }
}

module.exports = {scheck}