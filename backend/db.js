const mongoose = require("mongoose");
const mongoURI =
  "mongodb+srv://f20220078:tani1234@cluster0.dtepfgx.mongodb.net/gofoodmern?retryWrites=true&w=majority";

const mongoDB = async () => {
  try {
    console.log("Connecting to MongoDB...");
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    const fetched_data = await mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    const foodCategory = await mongoose.connection.db.collection(
      "foodCategory"
    );
    const CatData = await foodCategory.find({}).toArray();
    global.food_items = data;
    global.foodCategory = CatData;
    //  console.log(global.food_items);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

module.exports = mongoDB;
