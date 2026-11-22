
const express = require('express');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.static('public'));

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('Application is healthy');
});

// View all tasks
app.get('/tasks', async (req, res) => {
    try {
        const [tasks] = await db.query(
            'SELECT * FROM tasks ORDER BY id DESC'
        );
        res.json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

// Add a new task
app.post('/tasks', async (req, res) => {
    try {
        const { title } = req.body;

        if (!title || !title.trim()) {
            return res.status(400).json({ error: 'Title is required' });
        }

        const [result] = await db.query(
            'INSERT INTO tasks (title, status) VALUES (?, ?)',
            [title, 'pending']
        );

        res.status(201).json({
            message: 'Task added successfully',
            id: result.insertId
        });
    } catch (error) {
        res.status(500).json({ error: 'Database error' });
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`To-Do App running on port ${PORT}`);
});
