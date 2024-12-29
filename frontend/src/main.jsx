import { BrowserRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import { Toaster } from "react-hot-toast"
import { StrictMode } from 'react'
import GridBackground from './components/ui/GridBackground'
import App from './App.jsx'
import './styles/index.css'

const htmlRoot = document.getElementById('root');
const reactRoot = createRoot(htmlRoot);

reactRoot.render(

  <StrictMode>
    <BrowserRouter>
      <GridBackground>
        <App />
        <Toaster />
      </GridBackground>
    </BrowserRouter>
  </StrictMode>,
)
