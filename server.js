const express = require('express');
const axios = require('axios');
const app = express()
const port = 8080
app.get('/', (req, res) => {
    // Your code goes here ......
  res.send("Hello world");
})


app.get('/asset1', (req, res) => {
    // sample code
    axios.get('http://169.51.206.174:30440/add?param1=5&param2=5').then(resp => {
    res.send(resp.data);
    //Sample Response
    // {\"result\": 10,\"status\": 200}
    }).catch((e)=>{
        console.log("Something went wrong!!  ",e)
        res.send("error");
    });
})

app.get('/asset2', (req, res) => {
    // sample code
    axios.get('http://169.51.206.174:32518/validateLoan?loan=5000&income=5000').then(resp => {
    res.send(resp.data);
    //Sample Response
    //  {
    //   "result": "Loan Approved",
    //   "status": 200
    // }
    }).catch((e)=>{
        console.log("Something went wrong!!  ",e)
        res.send("error");
    });
})


app.listen(port, (req,res) => {
  console.log("Listening on the port  : ",port)
})

