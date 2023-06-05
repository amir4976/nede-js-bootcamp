const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const app = express()

// dot env is for share route and stuff around the project
const dotenv = require('dotenv').config()

 
// so if in dot env we dident save anything as port it use port 5000
const port = process.env.PORT || 5000;


// make responds json like what we do in feach
app.use(express.json())
// handle routes
app.use('/api/contacts' , require('./routes/contactRoutes'))
// handle error
app.use(errorHandler)

// and we run our project on port 5001 or 5000
app.listen(port ,()=>{
  console.log(`server is running' on port ${port}`);
})