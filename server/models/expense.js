import mongoose from 'mongoose';

const expenseSchema = mongoose.Schema({
    title: String,
    amount: Number,
    currency: {
        type: String,    
        enum: ["EUR", "USD"]
    },
    date: mongoose.SchemaTypes.Date,
    paidBy: String,
    forWhom: Array
}, { timestamps: true })

const Expense = mongoose.model("expense", expenseSchema)

export default Expense