import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster, toast } from "react-hot-toast";
import './index.css'
import App from './App.jsx'
import AuthContext from './Context/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContext>

    <Toaster position="top-right" reverseOrder={false} />
    <App />
    </AuthContext>
  </StrictMode>,
)
