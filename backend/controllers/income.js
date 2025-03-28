const IncomeSchema = require('../models/IncomeModel');



exports.addIncome = async (req, res) => {
    const {title, amount, type, category, description, date} = req.body;

    const income = IncomeSchema({
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
        res.status(200).json({message: "Income added successfully"});

    }catch (error){
        res.status(500).json({message: "Internal server error"});
    }

    console.log(income);
}

exports.getIncomes = async (req, res) => {
    try{
        const incomes = await IncomeSchema.find().sort({createdAt: -1});
        res.status(200).json(incomes);
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}

exports.deleteIncome = async (req, res) => {
    const {id} = req.params;
    try{
        await IncomeSchema.findByIdAndDelete(id);
        res.status(200).json({message: "Income deleted successfully"});
    }catch(error){
        res.status(500).json({message: "Internal server error"});
    }
}