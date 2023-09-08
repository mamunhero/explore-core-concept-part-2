
import './App.css'
import Users from './Users'
import Counter from './counter'
import Friends from './friends'
import Team from './team'

function App() {
// simple function event listener-1 
  function HandleClick () {
    alert("button click")
  }
  // anoyminus function
  const handleClick2 = () => {
    alert("button clicked2")
  }
  // parametet wuth function/vejalla function
  const addtoFive = (num) => {
    alert(num+5);
  }
  return (
    <>
      <Friends></Friends>
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
      <h1>React Core Concept 2</h1>
      {/* simple event listener-1 */}
      <button onClick={HandleClick}>Click me</button>
      {/* arro function */}
      <button onClick={handleClick2}>Click2</button>
      {/* direct function declar */}
      <button onClick={() => alert("button third clicked")}>Third</button>
      {/* parametet wuth function/vejalla function */}
      <button onClick={() =>{addtoFive(5)}}>four</button>
    </>
  )
}

export default App
