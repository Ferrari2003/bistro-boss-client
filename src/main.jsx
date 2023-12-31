import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
// import { RouterProvider } from 'react-router-dom'
// import { router } from './Routes/Router.jsx'
import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './provider/AuthProvider'
import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import App from './App'
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <AuthProvider>
        <HelmetProvider>

            <App />

        </HelmetProvider>
      </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

