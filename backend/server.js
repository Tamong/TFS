require('dotenv').config();
const cors = require('cors');

// installed express
const express = require('express');
const app = express();
const expRouter = require('./routes/index.js');

app.use(express.json());
app.use(cors());

app.use('/api', expRouter);

app.listen(3000, () => {
    console.log("Express Server started on Port 3000");
    connectDatabase();
})

const mysql = require('mysql');
// Create database pool
global.pool = mysql.createPool({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT,
  database: 'tfscoin'
});

const connectDatabase = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('RDS connection failed: ' + err.stack);
      return;
    }

    console.log('Connected to database.');
    connection.release();
  });
};



