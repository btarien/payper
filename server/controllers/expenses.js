import Expense from '../models/expense.js'

export const getExpenses = async (req, res) => {
    try {
        const expenses = await Expense.find() 
        res.status(200).json(expenses)   
    } catch(error) {
        res.status(400).send({message: error.message})
    }
}

export const createExpense = async (req, res) => {
    const expense = req.body
    
    try {
        const newExpense = await Expense.create(expense)
        res.status(201).json(newExpense)
    } catch (error) {
        res.status(409).send({message: error.message})
    }
}