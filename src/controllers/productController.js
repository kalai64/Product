import productSchema from "@/models/productSchema";
import { connectDB } from "@/lib/db";

const getProducts = async () => {
  try {
    await connectDB();

    const products = await productSchema.find({});

    return {
      success: true,
      message: "Fetched products successfully",
      products,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch products",
    };
  }
};

const addProduct = async (body) => {
  try {
    await connectDB();

    const product = await productSchema.create({
      name: body.name,
      price: body.price,
      oldPrice: body.oldPrice,
      category: body.category,
      active: body.active,
      description: body.description,
    });

    return {
      success: true,
      message: "Product added successfully",
      product,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to add product",
    };
  }
};

const getProductById = async (id) => {
  try {
    await connectDB();

    const product = await productSchema.findById(id);

    return {
      success: true,
      message: "Fetched product successfully",
      product,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to fetch product",
    };
  }
};

const updateProduct = async (id, body) => {
  try {
    await connectDB();

    const product = await productSchema.findByIdAndUpdate(
      id,
      {
        name: body.name,
        price: body.price,
        oldPrice: body.oldPrice,
        category: body.category,
        active: body.active,
        description: body.description,
      },
      { new: true }
    );

    return {
      success: true,
      message: "Product updated successfully",
      product,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to update product",
    };
  }
};

const deleteProduct = async (id) => {
  try {
    await connectDB();

    const product = await productSchema.findByIdAndDelete(id);

    return {
      success: true,
      message: "Product deleted successfully",
      product,
    };
  } catch (error) {
    return {
      success: false,
      message: "Failed to delete product",
    };
  }
};

export default {
  getProducts,
  addProduct,
  getProductById,
  updateProduct,
  deleteProduct,
};