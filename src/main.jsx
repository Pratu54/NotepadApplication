import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './redux/store.js'
import {Provider} from 'react-redux'
import  { Toaster } from 'react-hot-toast';
import { BrowserRouter } from "react-router";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
    <BrowserRouter>
    <App />
    <Toaster />
    </BrowserRouter>
    </Provider>
    
  </StrictMode>,
)
