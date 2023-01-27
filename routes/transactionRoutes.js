const express = require('express');
const { addTransaction, getAllTransactions, editTransaction, deleteTransaction } = require('../controllers/transactionController');

//router object

const router = express.Router();

//Routes
//add transaction POST
router.post('/addtransaction',addTransaction);
router.post('/gettransaction',getAllTransactions);
router.post('/edittransaction',editTransaction);
router.post('/deletetransaction',deleteTransaction);
module.exports = router;