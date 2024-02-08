import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Hello from './component/Hello.jsx'
import Dest from './component/Dest.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Hello />
    <Dest />
  </React.StrictMode>,
)
