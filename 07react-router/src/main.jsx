import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Github, { githubInfoLoader } from './components/Github/Github'
import User from './components/User/User'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element = {<Layout />}>
      <Route path='' element = {<Home />} />
      <Route path='about' element = {<About />}/>
      <Route path='contact' element = {<Contact />}/>
      <Route loader={githubInfoLoader} path='github' element = {<Github />}/>
      <Route path='user/' element={<User />}>
        <Route path=':userid' element={<User />} />
      </Route>      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
