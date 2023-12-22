const express = require('express');
const router = express.Router();
const authControllers = require('../controllers/auth-controller');
const signupSchema=require('../validators/auth-validator');
const validate=require('../middlewares/validation-middleware');
const saveController=require('../controllers/save- controller');
const questionController=require('../controllers/question-controller');
const authMiddleware=require('../middlewares/auth-middleware');
// router.get('/',async(req,res)=>{
//     res.status(200).send('Welcome to my server by router');
// })
router.route('/').get(authControllers.home);

router.route('/register').post(validate(signupSchema),authControllers.register);
router.route('/login').post(authControllers.login);
//get the data
router.route('/quiz/start/language').post(questionController.getQuestions);

router.route('/user').get(authMiddleware,authControllers.user);

//for storing questions in db
router.route('/save/quiz/questions').post(saveController.saveData);
module.exports=router;