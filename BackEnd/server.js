
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');


const app = express();
const PORT = 3001;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(bodyParser.json());

const connectToDb = require('./Database');
connectToDb();

const userRouter = require('./Routers/user.router');
const addTask = require('./Routers/task.router');
// Routes Middleware
app.use('/user', userRouter);
app.use('/user',addTask);

app.get('/', (req, res) => {
    res.send("Hello world...");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})