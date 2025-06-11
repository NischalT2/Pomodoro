const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/PomodoroDB');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    settings: {
        pomTime: Number,
        shortTime: Number,
        longTime: Number,
        longInterval: Number,
    }
});

const User = mongoose.model('User', userSchema);

const SECRET = '61e06fa84d587935be56b462e12ae5d141a721cfdb487d9c0a7069b00c360e915529ef594080bdd48db2e84969b5542b1277a8ae53f2e2e8ebabf98240d49382';

app.post('/signup', async(req, res) => {
    const { username, password, settings } = req.body;
    const hashed = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashed, settings });
    await user.save();
    res.json({ success: true });
    console.log("Signup response sent!")
});

app.post('/login', async(req, res) => {
    const {username, password } = req.body;
    const user = await User.findOne( {username});
    if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign({id: user._id }, SECRET);
    res.json({token, settings: user.settings});
    console.log("Login repsonse sent!")
});

// complete the settings backend call
app.put('/settings', async(req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return res.sendStatus(401);

    try {
        const { id } = jwt.verify(token, SECRET);
        const { settings } = req.body;

        await User.findByIdAndUpdate(id, { settings }, {new: true});

        res.sendStatus(200);
    } catch(error) {
        res.sendStatus(403);
    }
});

app.listen(5000, () => console.log('Server is running on port 5000'));