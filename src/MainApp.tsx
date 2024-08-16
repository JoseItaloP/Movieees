import Header from './components/HeaderComponets/Header'
import './output.css'
import { Outlet } from 'react-router-dom'


function App() {
  return (
    <>
      <div className='min-h-full text-zinc-950 dark:text-zinc-100 font-Lato'>
        <Header />
        <Outlet />
      </div>
    </>
  )
}

export default App
