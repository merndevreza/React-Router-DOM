import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Routes/Root'
import ErrorPage from './ErrorPage'
import Contact from './Routes/Contacts'
import { getContactsLoader } from './loaders/contactsLoader'

const router=createBrowserRouter([
  {
    path:"/",
    element:<Root/>,
    errorElement:<ErrorPage/>,
    loader:getContactsLoader,
    children:[
      {
        path:"contacts/:contactId",
        element:<Contact/>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
