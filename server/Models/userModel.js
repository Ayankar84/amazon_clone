const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        fname: { type: String, required: true, trim: true },
        mobile: { type: Number, required: true, unique: true, maxlength: 10 },
        password: { type: String, required: true, minlength: 6 },
        cart: []
    }
)

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;