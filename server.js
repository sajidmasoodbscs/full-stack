const express=require('express');
const {db}=require('./config/dbconfig')
const dotenv=require('dotenv')
const serverSetting=require('./config/serverconfig')
const app=express();
const PORT=process.env.PORT 


// app.get('/',function (req,res) {
//     res.send("Hello from the server");
// });

require('./routes/users')(app);

app.listen(serverSetting.PORT,()=>{
    console.log(`Server is running on http://${serverSetting.HOST}:${PORT}`);
})