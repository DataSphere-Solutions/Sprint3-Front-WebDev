import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Palestras from './routes/Palestras.jsx'
import GlobalStyle from './css/GlobalStyle.jsx'
import Dashboard from './routes/Dashboard.jsx'
import CadastrarUsuario from './routes/CadastrarUsuario.jsx'

const router = createBrowserRouter([
  {
    //Elemento Pai
    path: '/', element: <App />,
    errorElement: <Error />,

    //Elemento Filho
    children: [
      { path: '/', element: <Home /> },
      { path: '/Palestras', element: <Palestras/>},
      { path: '/login', element: <Login/>},
      {path:'/dashboard',element:<Dashboard/>},
      {path:'/cadastrarUsuario',element:<CadastrarUsuario/>},
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </StrictMode>,
)

