const mongoose = require("mongoose");

const connectDB = () => {
  // const URI = "mongodb://localhost:27017/SubscriptionsDB";
  const URI =
    "mongodb+srv://ilan99:work1000@cluster0.mytik.mongodb.net/SubscriptionsDB?retryWrites=true&w=majority";
  const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  mongoose.connect(URI, options);
};

module.exports = connectDB;
