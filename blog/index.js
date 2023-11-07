const express = require("express")
const connect = require("./config/db")
const router = require("./routes/user.route")
const app = express()
app.set("view engine", "ejs")
app.set("viwes", __dirname + "/views")
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const cookie = require("cookie-parser")
const router2 = require("./routes/blog.route")
app.use(cookie())
app.get("/", (req, res) => {
    res.send("Welcome to the movie API");
});
app.use("/user",router)
app.use("/blog" , router2)


app.listen(8090, ()=>{
    connect()
    console.log("port is satart 8090")
})