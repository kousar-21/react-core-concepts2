import { use } from "react"
import Friend from './friend'


export default function Friends({fetchPromise}){
    
    const friendss = use(fetchPromise);
    console.log(friendss)
    
    return(
        <div className="cards">
            <h3>Friends: {friendss.length}</h3>
            {
                friendss.map(friend => <Friend friend={friend} key={friend.id}></Friend>)
            }
        </div>
    )
}