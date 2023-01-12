
import './App.css';
const one = +prompt()
const two = +prompt()
const pleus = ()=>{
    let sum = one + two

  return(
<div>{sum}</div>
  )
}
function App() {
  return (
    <div>{pleus()}</div>

  )
 
}


export default App;
