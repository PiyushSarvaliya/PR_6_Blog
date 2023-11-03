const user = require("../models/user.schema")

const signupui = (req, res) => {
    res.render("sign-up")
}
const usercreate = async (req, res) => {
    let { username, password, email, role } = req.body
    let users = await user.findOne({ email: email })

    if (users) {
        res.cookie("role" , users.role)
        res.cookie("id",users.id).send(`Account created successfully  ${users.username}`)
    }
    else {
        let data = await user.create(req.body)
        res.cookie("role" , data.role)
        res.cookie("id",data.id).send(`Account created successfully  ${data.username}`)
    }
}

const login = async(req , res) =>{
    let {email , password} = req.body
    let data = await user.findOne({email : email})
    res.send(`Welcome User ${data.username}`)
}


module.exports = { signupui, usercreate }