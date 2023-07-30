/* installation */
const express = require("express");
const cors = require('cors');
const bodyParser= require('body-parser');
const mysql=require('mysql');
// const request=require("request")
const app = express();
// const { request, response } = require("express");
const port=process.env.port || 4000

/* setting */
app.use(cors());
app.use(express.json());

/*................. API code ..................*/


app.listen(port,()=>{
  console.log(`listening to port ${port}`)
})



/*....................... SQL query ............................*/

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


const pool = mysql.createPool({
  connectionLimit : 10 ,
  host            :'localhost',
  user            : 'root',
  password        :'',
  database        : 'pharmacy',
})

// get data 
app.get('',(req,res)=>{
  pool.getConnection((err,connection)=>{
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    
    console.log('Connected to MySQL database!');
    connection.query('SELECT * from centers',(err,rows)=>{
        connection.release()

        if(!err){
          res.send(rows)
        }else{
          console.log(err)
        }

    })
  })
})


// Post Sign up 
app.post("/signup", (req, res) => {

  const { fname, lname, username, password } = req.body.formData;

  // Log the data received from the request body
  console.log("Received Data:", fname, lname, username, password);

  // // Check if all required fields are provided
  // if (!fname || !lname || !username || !password) {
  //   return res.status(400).json({ message: "All fields are required" });
  // }

  // Construct the SQL query
  const sql = "INSERT INTO users (name, family, username, password, center_id) VALUES (?, ?, ?, ?,?)";

  // Execute the query with the data from the request body
  pool.query(sql, [fname, lname, username, password,1], (err, result) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ message: "Error inserting data into the database" });
    }

    // Log the result of the query
    console.log("Result:", result);

    res.status(200).json({ message: "Data inserted successfully" });
  });
});

//Post Sign in
app.post("/signin", (req, res) => {

  const {username, password } = req.body.formData;

  // Log the data received from the request body
  console.log("Received Data:", username, password);

  // // Check if all required fields are provided
  if (!username || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Construct the SQL query
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';

  // Execute the query with the data from the request body
  pool.query(sql, [username, password], (err, result) => {
    if (err) {
      console.log("Error:", err);
      return res.status(500).json({ message: "Error inserting data into the database" });
    }else {
      if (result.length > 0) {
        console.log('User exists and provided credentials are correct.');
        return  res.status(200).json({ message: "Data inserted successfully" });
        // Do something with the user data from the results array if needed
      } else {
        console.log('User not found or provided credentials are incorrect.');
        return res.status(401).json({ message: "User not exist" });
      }
    }
  });
});

// get getMedicanInfo
app.get('/getMedicanInfo',(req,res)=>{
  pool.getConnection((err,connection)=>{
    if (err) {
      console.error('Error connecting to MySQL database:', err);
      return;
    }
    
    console.log('Connected to MySQL database 1 !');
    connection.query('SELECT * from medicine_info',(err,rows)=>{
        connection.release()

        if(!err){
          res.send(rows)
        }else{
          console.log(err)
        }

    })
  })
})

// Post storrequest
app.post("/storrequest", (req, res) => {
  console.log('req body',req.body.data)
  let data_req=req.body.data
  for(let i=0;i<data_req.length;i++){
    const {
      center_id,
      user_id,
      shape,
      dose,
      inventory,
      medicine_name,
      consumption,
      requested,
      title,
      reqid
    } = data_req[i]

      // Check if required fields are provided
  // if (!center_id || !user_id || !shape || !dose || !inventory || !medicine_name) {
  //   return res.status(400).json({ message: "Required fields are missing" });
  // }

  // Construct the SQL query
  const sql =
    "INSERT INTO medicine_request (center_id , user_id, shape, dose, inventory, medicine_name, consumption, requested, title, reqid) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";

  // Execute the query with the data from the request body
  pool.query(
    sql,
    [
      center_id,
      user_id,
      shape,
      dose,
      inventory,
      medicine_name,
      consumption,
      requested,
      title,
      reqid
    ],
    (err, result) => {
      if (err) {
        console.log("Error:", err);
        return res.status(500).json({ message: "Error inserting data into the database" });
      }

      // Log the result of the query
      console.log("Result:", result);

      res.status(200).json({ message: "Data inserted successfully" });
    }
  );
  }
  
});




// Testing the connection
// pool.getConnection((err, connection) => {
//   if (err) {
//     console.error('Error connecting to MySQL database:', err);
//     return;
//   }
//   console.log('Connected to MySQL database!');
//   connection.release();
// });