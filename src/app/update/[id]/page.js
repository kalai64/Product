"use client";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Update({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    price: "",
    oldPrice: "",
    category: "",
    active: false,
    description: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const getById = async () => {
    try {
      const res = await axios.get(`/api/products/${id}`);
      setForm(res.data.product);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/products/${id}`, form);
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getById();
  }, []);

  return (
    <div className="min-h-screen bg-sky-500 flex justify-center items-center p-6">
      <div className="w-full max-w-3xl bg-white rounded-xl p-6">
        <h2 className="text-gray-500 text-3xl mb-2">Update Product</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label className="text-gray-500 block mb-2">Name</label>
            <input
              name="name"
              value={form.name}
              className="px-3 py-1 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-500 block mb-2">Price</label>
            <input
              type="number"
              name="price"
              value={form.price}
              className="px-3 py-1 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-500 block mb-2">Old Price</label>
            <input
              type="number"
              name="oldPrice"
              value={form.oldPrice}
              className="px-3 py-1 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>

          <div className="mb-2">
            <label className="text-gray-500 block mb-2">Category</label>
            <select
              name="category"
              value={form.category}
              className="px-3 py-1 w-full border rounded-md"
              onChange={handleChange}
            >
              <option>Vegetables</option>
              <option>Fruits & Nuts</option>
              <option>Dairy & creams</option>
              <option>Packages Food</option>
              <option>Staples</option>
            </select>
          </div>

          <div className="mb-2 flex gap-2">
            <input
              type="checkbox"
              name="active"
              checked={form.active}
              onChange={handleChange}
            />
            <label>Is Active</label>
          </div>

          <div className="mb-2">
            <label className="text-gray-500 block mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              className="px-3 py-1 w-full border rounded-md"
              onChange={handleChange}
            />
          </div>

          <button className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md">
            Update
          </button>
        </form>
      </div>
    </div>
  );
}