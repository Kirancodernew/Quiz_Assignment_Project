const Language= require('../models/languageData-model');

const getQuestions=async(req,res)=>{
    try {
        const language=req.body.value;
        const option=req.body.option;
        const questions=await Language.find({language:language});
        const data=questions[0];
        // Check the 'option' value to determine which array to retrieve
        let selectedArray;
        switch (option) {
            case 'easy':
                selectedArray = data.easy;
                break;
            case 'medium':
                selectedArray = data.medium;
                break;
            case 'hard':
                selectedArray = data.hard;
                break;
            default:
                return res.status(400).json({ msg: 'Invalid option specified.' });
        }

        // console.log(selectedArray);
        res.status(200).send(selectedArray);
    } catch (error) {
        res.status(400).json({msg: error.message});
    }
}

module.exports={getQuestions}