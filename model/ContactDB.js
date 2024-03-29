const mongoose = require("mongoose");

require('dotenv').config();

const dburl = process.env.DB_URL;

mongoose.connect(dburl).then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err)
})






const ContactDetails = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    contactNo: {
        type: Number,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    companyName: {
        type: String,
        require: true,
    },
    message: {
        type: String,
        require: true,
    },
});


const contactModel = mongoose.model("ContactUs", ContactDetails);


module.exports = contactModel;
