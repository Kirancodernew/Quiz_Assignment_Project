const mongoose=require('mongoose');

const URI=process.env.MONGODB_URI;
const connnectDB=async()=>{
    try {
        await mongoose.connect(URI);
        console.log("connection successful to DB")
    } catch (error) {
        console.error("database connection failed"+error);
        process.exit(0);
    }
}


module.exports = connnectDB;