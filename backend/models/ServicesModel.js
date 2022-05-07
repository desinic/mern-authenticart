const mongoose = require("mongoose");

const ServicesSchema = mongoose.Schema({
    services: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("Services", ServicesSchema);
