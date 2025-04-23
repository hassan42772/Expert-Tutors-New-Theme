import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements} from 'react-router-dom'
import Github from './components/Githubs/Github.jsx'
import Home from './components/Homes/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import LearnMore from './components/LearnMore/LearnMore.jsx'
import StudentForm from './components/StudentForm/StudentForm.jsx'
import TutorForm from './components/TutorForm/TutorForm.jsx'
import StudentList from './components/StudentForm/StudentList.jsx'
import TutorList from './components/TutorForm/TutorList.jsx'
import AdminLogin from './components/Login/AdminLogin.jsx'
import AdminBtn from './components/Login/AdminBtn.jsx'
import Cardlist from './components/Teachercard/Cardlist.jsx'
import TutorDetail from './components/Teachercard/TutorDetail.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='LearnMore' element={<LearnMore/>}/>
      <Route path='studentForm' element={<StudentForm/>}/>
      <Route path='tutorForm' element={<TutorForm/>}/>
      <Route path='github' element={<Github/>}/>
       <Route path='admin' element={<AdminLogin/>}/>
       <Route path='btn' element={<AdminBtn/>}/>
      <Route path='tutorData' element={<TutorList/>}/>
      <Route path='data' element={<StudentList/>}/>
      <Route path='card' element={<Cardlist/>}/>
      <Route path='tutor/:name' element={<TutorDetail/>}/>
    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
