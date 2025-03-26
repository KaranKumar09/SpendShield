
// const moongose = require('mongoose');

// const ExpenseSchema = new moongose.Schema({
//     title: {
//         type: String,
//         required: true,
//         trim: true,
//         maxLength: 50
//     },
//     amount: {
//         type: Number,
//         required: true,
//         maxLength: 20,
//         trim : true
//     },
//     type: {
//         type: String,
//         default: "income"
//     },
//     date: {
//         type: Date,
//         required:true,
//         trim : true
//     },
//     category:{
//         type: String,
//         required: true,
//         trim : true
//     },
//     description:{
//         type: String,
//         required: true,
//         maxLength: 20,
//         trim : true
//     },
// },{timestamps: true});

// module.exports = moongose.model('Expense', ExpenseSchema);

const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    amount: {
        type: Number,
        required: true,
        min: 1,  // Ensures amount is at least 1
        max: 1000000
    },
    type: {
        type: String,
        default: "expense"  // ✅ Fixed default value
    },
    date: {
        type: Date,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        maxLength: 200,  // ✅ Increased length
        trim: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Expense', ExpenseSchema);
