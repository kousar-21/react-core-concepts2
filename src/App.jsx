

import './App.css'
import Counter from './counter'
import Batsman from './batsman'
import ApiReact from './apiReact'
import Users from './apiReact'
import { Suspense } from 'react'
import Friends from './friendsApi'
import Posts from './posts'
import Players from './players'


// shortcurt way to use fetch  (demo = 1)
// const fetchUsers = fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())

// Another way to use fetch using Async And Await   (demo = 2)
// const fetchFriends = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users")
//   return res.json();
// }


// using Async And Await for fetch Posts (demo = 3)
  // const fetchPosts = async() => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/posts")
  //   return response.json();
  // }


function App() {

  // below line for using Async and Await for post part (demo = 3);
  // const promisePost = fetchPosts();


  // below line for api using Async and await For Post part  (demo = 2);
  // const fetchPromise = fetchFriends();


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

      <Players></Players>

      {/* fetch use demo = 3 */}
      {/* <Suspense fallback={<p>Please Wait...Post Are Loading</p>}>
          <Posts promisePost={promisePost} ></Posts>
      </Suspense> */}


      {/* fetch use demo =1 */}

      {/* <Suspense fallback={<p>The user is loading</p>}>
        <Users fetchUsers={fetchUsers}></Users>
      </Suspense> */}


        {/* fetch use demo = 2 */}
      {/* <Suspense fallback={<h2>The Friends List Is Loading</h2>}>

      <Friends fetchPromise= {fetchPromise}></Friends>

      </Suspense> */}

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
