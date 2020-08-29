const express = require('express');
const connectDB = require('./db');
const colors = require('colors');

const app = express();

// Connect to db
connectDB();

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5000;


//Define Routes
app.use('/api/users', require('./routes/users'))
app.use('/api/auth', require('./routes/auth'))



app.listen(PORT, () => console.log(`Server started on port ${PORT}`.yellow.bold.italic))