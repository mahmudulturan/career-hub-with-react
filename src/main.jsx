import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Components/Root/Root'
import Home from './Components/Home/Home'
import Statistics from './Components/Statistics/Statistics'
import AppliedJobs from './Components/AppliedJobs/AppliedJobs'
import Blogs from './Components/Blogs/Blogs'
import JobDetails from './Components/JobDetails/JobDetails'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/appliedjobs',
        loader: () => fetch('/jobs.json'),
        element: <AppliedJobs></AppliedJobs>
      },
      {
        path: '/blogs',
        element: <Blogs></Blogs>
      },
      {
        path: '/job/:jobID',
        loader: () => fetch('/jobs.json'),
        element: <JobDetails></JobDetails>,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
