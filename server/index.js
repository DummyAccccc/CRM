const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const User = require('./models/user.model')

const app = express()

app.use(cors())
app.use(express.json());

let DB_NAME = "crud"
let MONGODB_URL = 'mongodb+srv://aditya:aditya123@cluster0.959cw0a.mongodb.net'
mongoose.connect(`${MONGODB_URL}/${DB_NAME}`)
    .then(() => {
        app.listen(3001, () => {
            console.log("Server is running")
        })
    }).catch(err => console.log("mongodb connection failed", err))


// Define a route to handle POST requests to create a new user
app.post('/users', async (req, res) => {
    try {
        const { user, email, mobile, company, password } = req.body;

        // Create a new user object from the request body
        const newUser = new User({ role: user, email: email, mobile: mobile, company: company, password: password });

        // Save the new user to the database
        const savedUser = await newUser.save();
        // Respond with the saved user
        res.json(savedUser);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'An error occurred while creating the user' });
    }
});

app.get('/fetchUsers', async (req, res) => {
    try {
        // Fetch all users from the database
        const users = await User.find();

        // Respond with the fetched users
        // res.json(users);
        res.send(users);
    } catch (error) {
        // Handle errors
        console.error(error);
        res.status(500).json({ error: 'An error occurred while fetching users' });
    }
});
