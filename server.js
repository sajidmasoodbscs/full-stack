const express=require('express');
const dotenv=require('dotenv')
const app=express();
const PORT=process.env.PORT


app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})