require("dotenv").config();
const connectDB = require("./db/connect");
const Product = require("./models/30_Rs_Competition");
const ProductJson = require("./data.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await Product.create(ProductJson);
    console.log("Success");
  } catch (error) {
    console.error(error);
  }
};

start();
