import axios from 'axios'

const expensesUrl = "http://localhost:5000/expenses"

export const fetchExpenses = () => axios.get(expensesUrl);
export const createExpense = (newExpense) => axios.post(expensesUrl, newExpense);

const usersUrl = "http://localhost:5000/users"

export const fetchUsers = () => axios.get(usersUrl);
export const createUser = (newUser) => axios.post(usersUrl, newUser);