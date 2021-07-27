import { combineReducers } from "redux";
import expensesReducer from './expenses'

import usersReducer from './users'

export default combineReducers({
    expenses: expensesReducer,
    users: usersReducer
})