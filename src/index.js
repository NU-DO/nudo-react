import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { AuthContextProvider} from './contexts/AuthContext'
import './index.css'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='https://github.com/NU-DO/nudo-react/manifest.json'>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>    
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)