import { Navigate, Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router"

import HomePage from "./Page/HomePage.jsx"
import LoginPage from "./Page/LoginPage.jsx"
import Register from "./Page/Register.jsx"
import MyProperty from "./Page/MyProperty.jsx"
import PrivateRoute from "./Components/PrivateRoute.jsx"
function App() {

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Navigate to="/home" />} />
      <Route path="home" element={<HomePage/>}/>
      <Route path="login" element={<LoginPage/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="my-property" element={<PrivateRoute><MyProperty/></PrivateRoute>}/>
    </Route>


  )
)
return <RouterProvider router={router}/>
}

export default App
