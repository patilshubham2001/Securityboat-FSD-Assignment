
const express = require('express');
const { addTask, getTask, updateTask, deleteTask, getSingleTask } = require('../controllers/task.controller');
const router = express.Router();

router.route('/task').post(addTask);
router.route('/fetch-task').get(getTask);
router.route('/fetch-task/:id').get(getSingleTask);
router.route('/task/:id').put(updateTask);
router.route('/task-del/:id').delete(deleteTask);

module.exports = router;