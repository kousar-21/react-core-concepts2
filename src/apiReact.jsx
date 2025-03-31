

/**
 *  fetch : url :https://jsonplaceholder.typicode.com/users
 * */
import { use } from "react"

 



// regular fetch

// fetch ("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data));


// async and await er fetch

// const loadData = async() => {
//     const res =await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = res.json();
//     return data;
// }


/**
 * 1. just write a simple fetch with json conversion
 * 2. Wrap the data loading component under suspense.
 * 
 * **/ 

export default function Users({fetchUsers}){

    const users = use(fetchUsers);
    console.log(users);

    return(
        <div className="cards">
            <h3>Users: {users.length}</h3>
        </div>
    )
}