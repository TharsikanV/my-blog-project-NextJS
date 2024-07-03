"use client"
import { useState } from "react";
import { useEffect } from "react";

export default function Post({ params }) {
    const id = params.id;
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(process.env.NEXT_PUBLIC_API_URL + '/post/' + id)
            .then(res => res.json())
            .then(res => setPost(res))

    }, [])

    return(
        
    )
    <>
        <main className="container mx-auto px-4 py-6">
            <h2 className="text-4xl font-bold mb-4">Blog Post Title</h2>
            <p className="text-gray-500">Published on January 1, 2022</p>
            <img src="https://picsum.photos/200" alt="Post Image" className="my-4" />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </main>
    </>

}