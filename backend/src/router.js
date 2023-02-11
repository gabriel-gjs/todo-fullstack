const express = require('express');
const tasksController = require('./controllers/tasksController')
const tasksMiddleware = require('./middlewares/tasksMiddleware');

const router = express.Router();

router.get('/tasks', tasksController.getAll);
router.post('/task', tasksMiddleware.validateFieldBody, tasksController.createTask);
router.delete('/task/:id', tasksController.deleteTask);
router.put('/task/:id',
    tasksMiddleware.validateFieldBody,
    tasksMiddleware.validateFieldStatus, 
    tasksController.updateTask,
);

module.exports = router;