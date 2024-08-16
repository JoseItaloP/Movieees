import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import MainApp from './MainApp.tsx'
import Home from './routes/Home.tsx'
import Error_Page from './routes/Error_Page.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {register} from 'swiper/element/bundle'
import SingleMovie from './routes/SingleMovie.tsx'
import SingleTV from './routes/SingleTV.tsx'

register();
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


import './input.css'
import Search from './routes/Search.tsx'
import Tab from './routes/Tab.tsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainApp/>,
    errorElement: <Error_Page />,
    children: [
     {
      path: "/",
      element: <Home/>,
     },
     {
      path: 'movie/:id' ,
      element: <SingleMovie />,
     }, {
      path: 'TV/:id' ,
      element: <SingleTV />
     },
     {
      path: 'search',
      element: <Search />
     },
     {
      path: 'Tab/:id',
      element: <Tab />
     }
      
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
