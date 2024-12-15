import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos';
function App() {
  
  return (
    <>
      <h1 style={{color:'blue', fontSize:'25px',fontWeight:'bolder'}}>Learn about redux toolkit</h1>
       <AddTodo/>
       <Todos/>
    </>
  )
}

export default App
