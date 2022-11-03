import React from 'react'

export const getStaticPaths = async () =>{
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    const paths = data.map(post => ({

            params : { postId: post.id.toString() }
}))

    return {
        paths,
        fallback: false,
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.postId;
    console.log("id", id)
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json();

    return {
        props: {post : data }
    }
    console.log(data.id)
}


export default function PostId({post}) {
  return (
    <div>{post.title}</div>
  )
}