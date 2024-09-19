const mongoose = require("mongoose");

// Set strictQuery to suppress the deprecation warning
mongoose.set('strictQuery', false);

const mongoURI =
  "mongodb+srv://gofood:gogo@cluster0.sl3gc.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  await mongoose.connect(mongoURI, { useNewUrlParser: true }, async(err, result) => {
    if (err) console.log("00--0", err);
    else {
      console.log("Connected Successfully");
      const fechted_data = await mongoose.connection.db.collection("food_items");
      fechted_data.find({}).toArray(function(err,data){
        if(err)console.log(err);
        else console.log()
      })

    }
  });
};

// Exporting the function without calling it
module.exports = mongoDB();
