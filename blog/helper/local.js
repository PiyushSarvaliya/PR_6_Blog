const user = require("../models/user.schema")

const strategy = require("passport-local").Strategy

const local = (passport) =>{ 
    passport.use(new strategy ({usernameField : "email"},async(email , password , done) =>{
        let users = await user.findOne({email : email})

        if(!users){
            return done(null , false) 
        }
        if(users.password != password){
            return done(null , false)
        }
        return done(null , users)
    }))

    passport.serializeUser((users , done) =>{
        return done(null , users.id)
    })

    passport.deserializeUser(async(id , done) =>{
        let data = await user.findById(id)
        return done(null , data)
    })
}