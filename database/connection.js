const {MongoClient,mongoClient}=require("mongodb");
// const url="mongodb://127.0.0.1:27017";
const url="mongodb+srv://ajayythakur:Ajay123@cluster0.2btgmaj.mongodb.net/?retryWrites=true&w=majority";
const client= new MongoClient(url);

const insertData=async(data)=>{
    await client.connect();
    const database=client.db("React_Blog_Backend");
    const collection=database.collection("data");
    const dbResponse=await collection.insertMany(data);
    await client.close();
    return dbResponse;
}

module.exports={insertData}