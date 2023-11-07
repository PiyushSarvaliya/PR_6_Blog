const {Router} = require("express")
const { check } = require("../middlewares/blog.middleware")
const { isauth, logincheck } = require("../middlewares/auth")
const { blogcreateui, blogcreate, blogs, blogui, blogdelete, blogupadate, blogsearch, singleblog, likeupdate, addcomment } = require("../controllers/blog.controller")
const router2 = Router()

router2.get("/" , blogui)
router2.get("/create" ,isauth ,  blogcreateui)
router2.post("/create"  , check ,isauth,blogcreate)
router2.get("/blogs" , blogs)
router2.delete("/delete/:id" ,isauth , blogdelete)
router2.patch("/edit/:id" , isauth , blogupadate)
router2.get("/singleBlog/:id" , singleblog)
router2.patch("/like/:bid",logincheck,likeupdate)
router2.patch("/comment/:bid" , logincheck,addcomment)
router2.get("/search" , blogsearch)

module.exports = router2