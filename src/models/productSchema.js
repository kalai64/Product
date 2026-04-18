import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  oldPrice: Number,
  category: String,
  active: Boolean,
  description: String,
});

export default mongoose.models.Product ||
  mongoose.model("Product", productSchema);