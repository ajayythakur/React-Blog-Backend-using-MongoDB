const express=require("express");
const route=require("./routes/router");

const app=express();
app.use(express.json());
app.use(route);

app.listen(3001,()=>{
    console.log("Server is listening to Port 3001");
})