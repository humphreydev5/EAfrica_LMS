import {app} from "./app";
import connectDB from "./utils/db"
require("dotenv").config();



//create server
app.listen(process.env.PORT, () =>{
  console.log(`Server is running with port ${process.env.PORT}`);
  connectDB();
});

// import {app} from "./app";
require("dotenv").config();

// //create server
// app.listen(process.env.PORT, () =>{
//   console.log(`Server is running with port ${process.env.PORT}`);
// });