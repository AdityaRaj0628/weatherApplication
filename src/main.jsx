import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import { StateContextProvider } from './Context/Context.jsx'
import {StateContextProvider} from "./Context/Context.jsx"

ReactDOM.createRoot(document.getElementById('root')).render(
 <StateContextProvider>
   <App />
 </StateContextProvider>
   
 
)
