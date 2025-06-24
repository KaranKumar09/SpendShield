const express = require ( 'express' ) ;
const cors = require ( 'cors' ) ;
const db = require('./db/db');
const { readdirSync } = require('fs');


const app = express ( ) ;
require ( 'dotenv' ) .config ( ) ;
const PORT = process.env.PORT || 5000 ;
//middleware
app.use(express.json()) ;
app.use(cors()) ;

//routes
readdirSync('./routes').map((route) => app.use('/api/v1',require('./routes/' + route)));
    app.get('/', (req, res) => {
        res.send('Welcome to the Expense Tracker API') ;
    }) ;
    app.listen(PORT, () => {
        db();
        console.log(`Server is running on port ${PORT}`) ;
    }) ;