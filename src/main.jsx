import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './components/App.jsx'
import { HashRouter } from "react-router-dom";
import './styles/core/Reset.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
    <ChakraProvider>
      <App />
    </ChakraProvider>
    </HashRouter>
  </React.StrictMode>,
)
