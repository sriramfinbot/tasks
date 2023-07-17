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
    photo: {
        type: String,
        // data: Buffer, 
        // contentType: String
    },
});

module.exports = mongoose.model('userDetails', userSchema);