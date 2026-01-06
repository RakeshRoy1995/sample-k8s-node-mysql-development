const express = require('express');
const { connectDB } = require('./config/database');
const userRoutes = require('./routes/user.routes');

const app = express();
app.use(express.json());

connectDB();

app.use('/api/users', userRoutes);

app.get('/health', (req, res) => res.json({ status: 'OK' }));

module.exports = app;
