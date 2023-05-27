const userModel = require("../Models/userModel");

const userValidator = async (req, res, next) => {
    try {
        const { email, fname, mobile, password } = req.body;
        if (!email || !fname || !mobile || !password) {
            return (
                res.status(400).json({ error: "Some data is missing" })
            )
        }
        const userBymail = await userModel.findOne({ email });
        const userBynumber = await userModel.findOne({ mobile });
        if (userBymail) {
            return (
                res.status(400).json({ error: "Email already present" })
            )
        } else if (userBynumber) {
            return (
                res.status(400).json({ error: "Mobile number already present" })
            )
        }
    } catch (e) {
        res.status(400).send({ error: e.message })
    }
    next();
}

module.exports = userValidator;