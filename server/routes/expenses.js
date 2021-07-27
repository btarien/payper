import express from 'express';
import {getExpenses, createExpense} from '../controllers/expenses.js'

var router = express.Router();

/* GET home page. */
router.get('/', getExpenses);
router.post('/', createExpense)

export default router;
