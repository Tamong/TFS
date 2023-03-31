require('dotenv').config();
const cors = require('cors');

// installed express
const express = require('express');
const app = express();
const expRouter = require('./routes/index.js');
app.use(express.json());
app.use(cors());
app.use('/api', expRouter);
app.listen(4000, () => {
    console.log("express server started");
    connectDatabase();
})



// mysql
const mysql = require('mysql');

// db create connection
global.connection = mysql.createConnection({
  host     : process.env.RDS_HOSTNAME,
  user     : process.env.RDS_USERNAME,
  password : process.env.RDS_PASSWORD,
  port     : process.env.RDS_PORT
});

// db open connection
const connectDatabase = () => {
    connection.connect(function(err) {
        if (err) {
          console.error('RDS connection failed: ' + err.stack);
          return;
        }
      
        console.log('Connected to database.');
      
          connection.changeUser({ database: 'tfscoin' }, function(error) {
          if (error) {
              console.error('Database connection failed: ' + err.stack);
              return;
          }
      
          console.log('Database selected.');

          //connection.end(); // close connection
        });
      
      });
}



