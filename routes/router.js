const  router=require("express").Router();

const controller=require("../controller/controller");

router.post("/insert",controller.insertDoc);

module.exports=router;