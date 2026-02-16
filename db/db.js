//manojkc279_db_user
//8S3O1zoIonldAmkC
const mongoose = require("mongoose");
const DB_URL = "mongodb+srv://manojkc279_db_user:8S3O1zoIonldAmkC@cluster0.cxniies.mongodb.net/";

const connectToDB = async () => {
    try {
        await mongoose.connect(DB_URL);
        console.log("Database is connected")
    }
    catch (error) {
        console.log('database connection error is', error);
        console.log('database connection error is', error.message);
    }

}
module.exports = connectToDB; 