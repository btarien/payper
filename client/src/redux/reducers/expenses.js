const reducer = (expenses = [], action) => {
    switch (action.type) {
        case "FETCH_EXPENSES":
            return action.payload;
        case "CREATE_EXPENSE":
            return [...expenses, action.payload];
    
        default:
            return expenses;
    }
}

export default reducer;