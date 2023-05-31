const mongoose = require('mongoose');
const {config} = require("../config/secret")


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(`mongodb+srv://${config.USER_DB}:${config.PASS_DB}@cluster0.f5jt7fe.mongodb.net/idf8`);
  console.log("mongo connect toys atlas");
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}