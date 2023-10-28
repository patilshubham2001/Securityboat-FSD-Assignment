
const Task = require('../Models/task.model');

// create
exports.addTask = async (req, res) => {

    try {

        const { title, description } = req.body;

        const task = await Task.create({
            title,
            description
        })

        res.status(201).json({
            success: true,
            message: 'Task Add Successfuly',
            task
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Sever Error',
            error
        })
    }
}

// Read
exports.getTask = async (req, res) => {
    try {

        let task = await Task.find({});
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "No tasks found"
            });
        }

        res.status(201).json({
            success: true,
            data: {
                task
            },
            message: "Tasks fetched successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Sever Error',
            error
        })
    }
}

// get single Task

exports.getSingleTask = async (req, res) => {
    try {

        const { id } = req.params;
        let task = await Task.findById(id);
        if (!task) {
            return res.status(404).json({
                success: false,
                message: "No tasks found"
            });
        }

        res.status(201).json({
            success: true,
            data: {
                task
            },
            message: "Tasks fetched successfully",
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Internal Sever Error',
            error
        })
    }
}

// update

exports.updateTask = async(req, res) =>{

    try {

        const { id } = req.params;
        const updatedTask = await Task.findByIdAndUpdate(id, req.body, {new:true});

        res.status(200).json({updatedTask})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

//delete
exports.deleteTask = async(req, res) =>{

    try {

        const { id } = req.params;
        await Task.findByIdAndRemove(id);

        res.status(200).json({message:'Task delete successfully'})
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}