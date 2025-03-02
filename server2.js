// import express from "express";
// const app = express();

// import db from './db.js';

// app.get("/", (req, res) => {
//     res.send("Hello world");
// });


// app.get("/chicken",(req,res)=>{
//     //console.log("yes sir data is loading please wait here only");
//     res.send("Sure sir,I would love to serve chicken to you");
// })
// app.get("/idli",(req,res)=>{
//     var customized_idli = {
//         name: "rava idli",
//         size: "medium",
//         is_sambhar : true,
//         coconut_chutney : true
//     }
//     res.send(customized_idli);
// });
// app.post("/items",(req,res)=>{
//     res.send("data is saved successfully");
//})


// app.listen(4000, () => {
//     console.log("Server is running on port 4000");
// });
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import Person from "./models/persons.js";
import personRouter from "./routes/personRoutes.js";
import menuItem from "./models/menuItem.js"; // ✅ Correct Import
import menuRouter from "./routes/menuRouter.js"; // ✅ Correct Import
const app = express(); // ✅ Define `app` first

app.use(bodyParser.json()); // ✅ Use middleware after defining `app`

// ✅ Connect to MongoDB
const mongoURI = "mongodb://localhost:27017/hotel"; // Change 'hotel' to your DB name
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ MongoDB Connection Error:", err));

  //use person router
app.use('/persons',personRouter);
app.use('/menuItem',menuRouter);
// ✅ Route to Save a Person



// ✅ Welcome Route
app.get("/", (req, res) => {
    res.send("Welcome to the hotel. How can I help you? We have a list of menus.");
});


// ✅ Start the Server
app.listen(4000, () => {
    console.log("🚀 Server is running on port 4000");
});
