import Post from "@/components/Post";

export async function generateMetaData({params}){
    const id=params.id
}

export default function Page({ params }) {
   return <Post params={params}/>
}