// import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import HomePage from './Components/HomePage'
import SignIn from './Components/SignIn'
import Dashboard from './Components/Dashboard'
import Courses from './Components/Courses'
import Instructor from './Components/Instructor'
import NewCourse from './Components/NewCourse'
import AssignCourse from './Components/AssignCourse'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path='/signin' element={<SignIn />}></Route>
        <Route path='/dashboard' element={<Dashboard />}></Route>
        <Route path='/dashboard/courses' element={<Courses />}></Route>
        <Route path='/dashboard/instructor' element={<Instructor />}></Route>
        <Route path='/dashboard/newcourse' element={<NewCourse />}></Route>
        <Route path='/dashboard/assigncourse' element={<AssignCourse />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
