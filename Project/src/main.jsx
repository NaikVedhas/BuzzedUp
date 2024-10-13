import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider,createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom';
import About from './components/About';
import Services from './components/Services';
import Contact from './components/Contact';
import Blogs from './components/Blogs';
import Layout from '../Layout';
import Home from './components/Home'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='about' element={<About/>} />
      <Route path='services' element={<Services/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='blogs' element={<Blogs/>} />
      <Route path='' element={<Home/>} />

    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
