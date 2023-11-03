const {Router} = require("express")
const { signupui, usercreate } = require("../controllers/user.controller")
const passport = require("passport")
const { scheck } = require("../middlewares/user.middlewares")
const router = Router()


router.get("/signup" , signupui)
router.post("/signup", scheck ,usercreate)
router.post("/login" , passport.authenticate("local") )

module.exports = router