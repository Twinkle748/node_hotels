// import mongoose from "mongoose";
// const mongoURL = "mongodb://localhost:27017/hotels";

// mongoose.connect(mongoURL,{
//     useNewUrlParser: true,
//     useUnifiedTopology:true
// })

// const db = mongoose.connection;
//  //event listeners

//  db.on('connected',()=>{
//      console.log(" Connected to MongoDB server");
//  });

//  db.on('error',(err)=>{
//     console.error("MongoDB connection error:",err);
//  });

//  db.on('disconnected',()=>{
//      console.log("MongoDB disconnected");
//  });

import mongoose from "mongoose";

const mongoURI = "mongodb://localhost:27017/yourDatabaseName"; // Local MongoDB
// const mongoURI = "your_mongodb_atlas_connection_string"; // Uncomment for MongoDB Atlas

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        process.exit(1); // Exit process if connection fails
    }
};

export default connectDB;
