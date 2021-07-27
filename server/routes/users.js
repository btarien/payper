import express from 'express';
import userController from '../controllers/users.js';

var router = express.Router();

/* GET home page. */
router.get('/', userController.getMany);
router.post('/', userController.createOne);

export default router;