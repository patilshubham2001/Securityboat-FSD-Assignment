const User = require('../Models/user.model');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken');

exports.registerUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;

        // Check if a user with the provided email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: 'User with this email already exists',
            });
        
        }

        // Create a new user

        const user = await User.create({
            name,
            email,
            password: bcrypt.hashSync(password, 8)
        })

        res.status(201).json({
            success: true,
            message: 'Registration Successful',
            user
        });
    } catch (err) {
        console.error(err); // Log the error for debugging purposes

        res.status(500).json({
            success: false,
            message: 'Server Error',
            error: err.message, // Include the error message in the response
        });
    }
};

exports.loginUser = async (req, res, next) => {

    try {

        const { email, password } = req.body;

        const user = await User.findOne({
            email
        })

        if (!user) {
            res.status(404).json({
                success: false,
                message: 'User Not Found!'
            })
        }

        const passwordIsValid = bcrypt.compareSync(
            password,
            user.password
        )
        if (!passwordIsValid) {
            return res.status(401).json({
                success: false,
                message: 'Invalid Password'
            })
        }

        // Create a JWT token with user information
        const secretKey = 'GSFLGMFH7SG778GSFGSGS54G'
        const token = jwt.sign({ email: user.email }, secretKey, { expiresIn: '1h' });
        
        const AUTH_TOKEN = 'x-auth-token';
        res.header(AUTH_TOKEN, token).json({
            success: true,
            message: 'Login successfully',
            token,
            email: user.email,
            isAuthenticated: true,
        })

    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message
        });
    }

}

