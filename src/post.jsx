

export default function Post({post}){

    console.log(post);
    const {title, userId, body} = post;
    return(
        <div className="cards">
            <h3>Title: {title}</h3>
            <h4>UserId: {userId}</h4>
            <p>Description: {body}</p>
        </div>
    )
}