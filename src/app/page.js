"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function Home() {
  const [products, setProducts] = useState([]);

const fetchData = async () => {
  try {
    const res = await axios.get("/api/products");
    setProducts(res.data.products);
  } catch (error) {
    console.log(error)
  } 
  
};

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/products/${id}`);
    } catch (error) {
      console.log(error)
    }
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-sky-500 flex justify-center items-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-xl p-6">
        <div className="flex justify-between mb-4">
          <h2 className="text-gray-500 text-2xl">Products</h2>
          <Link href="/create" className="bg-blue-500 text-white px-3 py-1 rounded">
            +Add
          </Link>
        </div>

        <table className="w-full">
          <thead>
            <tr>
              <th className="text-gray-500">No</th>
              <th className="text-gray-500">Name</th>
              <th className="text-gray-500">Price</th>
              <th className="text-gray-500">Category</th>
              <th className="text-gray-500">Action</th>
            </tr>
          </thead>

          <tbody>
            {products.map((p, i) => (
              <tr key={p._id}>
                <td className="text-gray-500 text-center">{i + 1}</td>
                <td className="text-gray-500 text-center">{p.name}</td>
                <td className="text-gray-500 text-center">{p.price}</td>
                <td className="text-gray-500 text-center">{p.category}</td>
                <td className="text-center gap-2">
                  <Link 
                  href={`/update/${p._id}`} 
                  className='bg-blue-500 hover:bg-blue-600 px-3 py-2 rounded-md text-white'>Edit</Link>
                  <button 
                  onClick={() => handleDelete(p._id)} 
                  className='bg-red-500 hover:bg-red-600 px-3 py-1 rounded-md text-white'>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}