const mongoose = require("mongoose");
const schema = mongoose.Schema;
let userSchema = new schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    email: {
        type: String,
    },
    mob_no: {
        type: String,
    }, 
    Post: {
        type: String,
    },
    bld_group: {
        type: String,
    },
    NCC : {
        type: Array
    },
    dateOfBirth: {
        type: String
    }, 
    gender: {
        type: String
    },
    qualification: {
        type: String,
    },
    photo: {
        type: String,
    },
});

module.exports = mongoose.model('userDetails', userSchema);