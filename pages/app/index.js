import React, { useEffect, useState } from 'react'
import Link from 'next/link'


export const getStaticProps = async () =>{

    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();

    return{
        props: {app : data }
    }
}

export default function Posts({app}) {
    
  return (
    <div>
        <h1>Posts</h1>
        {
            app.length === 0 ? (
                <div>Loading....</div>
            ) : (
                app.map( posts => (
                    <div key={posts.id}>
                        <div>
                            <Link 
                                href= {`/app/${posts.id}`}
                                  as= {`/app/ViewPost?postId=${posts.id}`}
                                // href={{
                                //     pathname : `app/${user.id}`,
                                //     query: {postId : `${user.id}`}
                                // }}
                                  key={posts.id}
                            >
                                {posts.title}
                            </Link>
                        </div>
                    </div>
                ))
            )
        }
    </div>
  )
}

// http://localhost:3000/app/ViewPost?postId=1
