"use client"
import { useState } from "react";
import { useEffect } from "react";

export default function Post({params}) {
    const id=params.id;
    const [post,setPost]=useState(null);

    useEffect(()=>{
        fetch(process.env.NEXT_PUBLIC_API_URL + '/post/'+id)
        .then(res=>res.json())
        .then(res=>setPost(res))

    },[])

    return 
    <>
    </>
    
}