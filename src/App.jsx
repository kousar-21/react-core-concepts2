

import './App.css'
import Counter from './counter'
import Batsman from './batsman'

function App() {

  function handleClick(){
    alert("Will You Stop You Idiot")
  }

  const  handleClick3 = () => {
    alert("First Arrow Function Is Working")
  }

  const handleClick4 = (num) => {
    const sum = num + 50;
    alert(sum);
  }

  return (
    <>
      <Batsman></Batsman>
      <Counter></Counter>


      <h3>Vite + React</h3>
      
      {/* main way to use click handler */}
      <button onClick={handleClick}>Click Me</button>
      {/* another way to use click handler */}
      <button onClick={function clickHandle(){
        alert("this is the second type")
      }}>Click Me 2</button>


      {/* Use Arrow funtion to Handle event */}
      <button onClick={handleClick3}>Click Me 3</button>
      {/* second type of arrow funtion */}
      <button onClick={()=>{alert("this is the second way of arrow funtion")}}>Click Me 4</button>


      {/* Use of parametar in function in Handle Event */}
      <button onClick={() => handleClick4(20)}>Click Parametar Buttton</button>
    </>
  )
}

export default App
