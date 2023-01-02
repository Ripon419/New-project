const mongoose = require("mongoose")

const AboutSchema = new mongoose.Schema({

    image : {
        type : String,
        required : false
    },
    birthday : {
        type : String,
        required : false
    },
    website : {
        type : String,
        required : false
    },
    phn : {
        type : String,
        required : false
    },
    city : {
        type : String,
        required : false
    },
    age : {
        type : String,
        required : false
    },
    degree : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false
    },
    freelance : {
        type : String,
        required : false
    }, 
});

const About = mongoose.model("About", AboutSchema);

module.exports = About;

