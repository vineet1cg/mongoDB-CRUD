require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('Could not connected to MongoDB', err));

const userSchema = new mongoose.Schema({
    name: String,
    password: String,
    
},{
    versionKey: false
});

const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    res.send('Server is running!');
});

// post one 
app.post('/one', async (req,res)=>{
    let user = new User(req.body);
    await user.save()
    res.status(201).send({
        message: 'User created!',
        user: user
    });
})

// post many
app.post('/many', async (req,res)=>{
    try{

        let users = new User(req.body);
        await User.insertMany(req.body)
        res.status(201).send('Users created!');
    }
    catch(err){
        res.status(500).send('Error creating users!');
    }
})

// get all
app.get('/users', async (req,res)=>{
    try{
        const users = await User.find();
        res.status(200).send(users);
    }
    catch(err){
        res.status(500).send(err);
    }
})

// get by id
app.get('/users/:id', async (req,res)=>{
    let userId = (req.params.id);
    try{
        const user = await User.findById(userId);
        res.status(200).send(user);
    }
    catch(err){
        res.status(500).send(err);
    }
})

// put route
app.put('/users/:id', async (req,res)=>{
    let userId = (req.params.id);
    try{
        const user = await User.findByIdAndUpdate(userId, req.body);
        res.status(200).send({
            message: 'User updated!',
            user: user
        });
    }
    catch(err){
        res.status(500).send(err);
    }
})

// patch route
app.patch('/users/name/:id', async (req,res)=>{
    const userId = (req.params.id);
    try{
        const user = await User.findByIdAndUpdate(userId, {
            name: req.body.name
        });
        res.status(200).send({
            message: 'User updated!',
            user: user
        });
    }
    catch(err){
        res.status(500).send(err);
    }
})

// delete route
app.delete('/users/:id', async (req,res)=>{
    let userId = (req.params.id);
    try{
        const user = await User.findByIdAndDelete(userId);
        res.status(200).send({
            message: 'User deleted!',
            user: user
        });
    }
    catch(err){
        res.status(500).send(err);
    }
})

app.listen(PORT, () => {
    console.log('Server is running on port ', PORT);
});