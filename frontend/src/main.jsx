import ReactDOM from 'react-dom/client'
import React from 'react'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import StorageContextProvider from './components/context/StoreContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StorageContextProvider>
      <App />
    </StorageContextProvider>
  </BrowserRouter>  
  
)
