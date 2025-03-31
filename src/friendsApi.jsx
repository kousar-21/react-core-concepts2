import { use } from "react"


export default function Friends({fetchPromise}){
    
    const friendss = use(fetchPromise);
    console.log(friendss)
    
    return(
        <div className="cards">
            <h3>Friends: {friendss.length}</h3>
        </div>
    )
}