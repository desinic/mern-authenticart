const mongoose = require("mongoose");

const LetsTalkSchema = mongoose.Schema({
    letsTalkDesc: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("LetsTalk", LetsTalkSchema);
