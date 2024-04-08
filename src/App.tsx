import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'

import { Button } from './components/ui/button'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner';
import { router } from './routes'

export function App() {

  return (
      <HelmetProvider>
        <Toaster />
        <Helmet titleTemplate='%s | Pizza Shop'/>
       <RouterProvider router={router}/>
      </HelmetProvider>
   
  )
}
 