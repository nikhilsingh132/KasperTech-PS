const mongoose = require("mongoose");

const connectionOptions = {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
};

const connectionString = 'mongodb+srv://admin:admin@cluster0.hxacfnr.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(connectionString, connectionOptions)
    .then(() => {
        console.log("MongoDB connected successfully");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });