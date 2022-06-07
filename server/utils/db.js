const mongoose = require("mongoose");

const url =
  "mongodb+srv://ClintonEkegbu:ClintonEkegbu@cluster0.bf5dp.mongodb.net/socialapp?retryWrites=true&w=majority";

mongoose.connect(url).then(() => {
  console.log("database is now connected...!");
});

module.exports = mongoose;
