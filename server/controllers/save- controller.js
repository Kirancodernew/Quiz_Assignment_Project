const Language=require('../models/languageData-model');




const saveData=async(req,res)=>{
    try {
        const {language,easy,medium,hard}=req.body;
        const savedData=await Language.create({language,easy,medium,hard});
        if(!savedData){
            return res.send("Data is not Saved");
        }
        res.status(200).json( {msg:"successfully saved"});
    } catch (error) {
        console.log(error);
    }
}


module.exports={saveData}