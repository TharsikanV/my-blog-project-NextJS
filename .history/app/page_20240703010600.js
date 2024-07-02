"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(process.env.API_URL + '/posts')
      .then((res) => res.json())//vara data ah json data ah maathuram
      .then(res => setPosts(res))
  }, []);

  return (
    <>
      <main className="container mx-auto px-4 py-6">
        <h2 className="text-4xl font-bold mb-4">Welcome to Our Blog</h2>
        <p>Here you can the latest articles.</p>
      </main>
      <div className="flex justify-end px-4">
        <input type="text" className="px-4 py-2 border border-gray-300 rounded-md" placeholder="Search..." />
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md ml-4">Search</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post)=>(

        ))
        
        }
      </div>
    </>

  );
}
