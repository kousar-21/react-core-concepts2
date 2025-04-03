import { use } from "react"
import Post from './post'


export default function Posts({promisePost}){

    // console.log(promisePost)

    // for import use
    const posts = use(promisePost);
    console.log(posts)

    return(
        <div className="cards">
            <h1>All Post Are Here: {posts.length}</h1>
            {
                posts.map(post => <Post post={post} key={post.id}></Post>)
            }
        </div>
    )
}