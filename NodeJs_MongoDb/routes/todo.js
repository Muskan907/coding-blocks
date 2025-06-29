const express = require('express');
const router = express.Router();

const todocontroller = require('../controllers/todocontroller');

router.get('/gettodos', todocontroller.getGetTodo);
router.post('/addtodo', todocontroller.postAddTodo);
router.post('/deletetodo', todocontroller.postDeleteTodo);
router.get('/increasepriority', todocontroller.getIncreasePriority);
router.get('/decreasepriority', todocontroller.getDecreasePriority);

module.exports = router;
