import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './Route/Route.jsx'
import 'flowbite';
import AuthProvider from './Providers/AuthProvider.jsx'
 import { ToastContainer } from 'react-toastify';
 import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'
 const queryClient = new QueryClient()
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <QueryClientProvider client={queryClient}>
     <AuthProvider>
     <RouterProvider router={router}/>
     <ToastContainer />
    </AuthProvider>
     </QueryClientProvider>
   
  </StrictMode>,
)
