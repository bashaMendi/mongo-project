require("dotenv").config();

exports.config = {
    USER_DB:process.env.USER_DB,
    PASS_DB:process.env.PASS_DB,
    TOKEN_SECRET:process.env.TOKEN_SECRET
}