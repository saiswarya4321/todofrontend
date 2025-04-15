import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home'
import Signup from './components/Signup'
import { BrowserRouter, Routes, Route, Link } from "react-router";
import Header from './components/Header'
import Login from './components/Login'
import Todosview from './components/Todosview'
import AddTodo from './components/AddTodo'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <BrowserRouter>
        <Header/>
        <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/signup' element={<Signup/>}></Route>
        <Route path='/todosview' element={<Todosview/>}></Route>
        <Route path='/addtodo' element={<AddTodo/>}></Route>
       

        </Routes>
        </BrowserRouter>
       </div>
    </>
  )
}

export default App
