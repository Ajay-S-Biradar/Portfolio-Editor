import { useState } from 'react'
import {Provider} from 'react-redux'
import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'

import './App.css'
import Introduction from './pages/Introduction'
import Works from './pages/Works'
import About from './pages/About'
import Skills from './pages/Skills'
import appStore from './store/appStore'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:[<Navbar />, <Outlet/>, <Footer />],
    children:[{
      path:'/',
      element:<Introduction />
    },
    {
      path:'/skills',
      element:<Skills />
    },
    {
      path:'/works',
      element:<Works />
    },
    {
      path:'/about',
      element:<About />
    }
    ]
  }
])


function App() {

  return (
    <Provider store={appStore}>
      {/* <Introduction /> */}
      {/* <Works /> */}
      {/* <About /> */}
      {/* <Skills /> */}
      <RouterProvider router={appRouter} />
    </Provider>
  )
}

export default App
