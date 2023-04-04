const mongoClient=require("../database/connection");

const insertDoc=async(req,res)=>{
    const  data = req.body;

    try{
    const result=await mongoClient.insertData(data);
    console.log(result);
    res.status(200).send(result);
    }
    catch(error){
    console.log("Some Error is there",error);
    res.status(500).send({message:"Some Error is there",error});
    }
}

module.exports={insertDoc};
