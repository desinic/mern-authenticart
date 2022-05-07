const mongoose = require("mongoose");

const EditSchema = mongoose.Schema({
    aboutDesc: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Edit", EditSchema);
