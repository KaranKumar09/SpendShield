const ExpenseSchema = require('../models/ExpenseModel');



exports.addExpense = async (req, res) => {
    const {title, amount, type, category, description, date} = req.body;

    const income = ExpenseSchema({
        title,
        amount,
        type,
        category,
        description,
        date
    })
    try{
        //validations
        if(!title || !category || !description || !date ){
            return res.status(400).json({error: "All fields are required"});
        }
        if(amount <=0 || !amount === 'number'){
            return res.status(400).json({error: "Amount must be a number and greater than 0"});
        }
        await income.save();
        res.status(200).json({message: "Expense added successfully"});

    }catch (error){
        res.status(500).json({message: "Internal server error"});
    }

    console.log(income);
}

exports.getExpense = async (req, res) => {
    try{
        const incomes = await ExpenseSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

exports.deleteExpense = async (req, res) => {
    const {id} = req.params;
    try{
        await ExpenseSchema.findByIdAndDelete(id);
        res.status(200).json({message: "Expense deleted successfully"});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}