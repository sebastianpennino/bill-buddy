import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import App from './containers/App'
import registerServiceWorker from './utils/registerServiceWorker'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
registerServiceWorker()