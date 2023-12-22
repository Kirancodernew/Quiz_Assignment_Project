require('dotenv').config();
const express=require('express');
const cors=require('cors');
const app=express();
const router=require('./router/auth-router')
const connnectDB=require('./utils/db');
const errorMiddleware = require('./middlewares/error-middleware');



app.use(cors());
app.use(express.json());

app.use('/api/auth',router);
app.use(errorMiddleware);
const PORT=5000;

connnectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`server is running at port: ${PORT}`);
    })
})
