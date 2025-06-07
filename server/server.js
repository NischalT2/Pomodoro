const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bcrypt= require('bcrypt');
const jwt = require('jsonwbtoken');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/PomodoroDB');

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    userStated: Object,
});

const User = mongoose.model('User', userSchema);

const SECRET = '61e06fa84d587935be56b462e12ae5d141a721cfdb487d9c0a7069b00c360e915529ef594080bdd48db2e84969b5542b1277a8ae53f2e2e8ebabf98240d49382';

