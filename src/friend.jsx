

export default function Friend({friend}){

    console.log(friend);
    const {name, username, email, address, phone, website} = friend;
    return(
        <div className="cards">
            <h4>Name: {name}</h4>
            <p>Username: {username}</p>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <p>Website: {website}</p>
            <div>Address: <br /> {address.street},{address.suite},{address.city}, Zipcode: {address.zipcode}</div>
        </div>
    )
}