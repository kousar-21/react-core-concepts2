

import './App.css'
import Counter from './counter'
import Batsman from './batsman'
import ApiReact from './apiReact'
import Users from './apiReact'
import { Suspense } from 'react'
import Friends from './friendsApi'

// shortcurt way to use fetch
const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
.then(res => res.json())

// Another way to use fetch using Async And Await
const fetchFriends = async() => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")
  return res.json();
}


function App() {

  // below line for api
  const fetchPromise = fetchFriends();


  function handleClick() {
    alert("Will You Stop You Idiot")
  }

  const handleClick3 = () => {
    alert("First Arrow Function Is Working")
  }

  const handleClick4 = (num) => {
    const sum = num + 50;
    alert(sum);
  }

  return (
    <>

      <h3>Vite + React</h3>
      <Suspense fallback={<p>The user is loading</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense>

      <Suspense fallback={<h2>The Friends List Is Loading</h2>}>

      <Friends fetchPromise= {fetchPromise}></Friends>

      </Suspense>

      <Batsman></Batsman>
      <Counter></Counter>

      {/* main way to use click handler */}
      <button onClick={handleClick}>Click Me</button>
      {/* another way to use click handler */}
      <button onClick={function clickHandle() {
        alert("this is the second type")
      }}>Click Me 2</button>


      {/* Use Arrow funtion to Handle event */}
      <button onClick={handleClick3}>Click Me 3</button>
      {/* second type of arrow funtion */}
      <button onClick={() => { alert("this is the second way of arrow funtion") }}>Click Me 4</button>


      {/* Use of parametar in function in Handle Event */}
      <button onClick={() => handleClick4(20)}>Click Parametar Buttton</button>
    </>
  )
}

export default App
