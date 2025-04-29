import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { PageLayout } from "./pages/PageLayout.";
import { ErrorPage } from "./pages/ErrorPage";
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Contact} from "./pages/Contact";
import {Country} from "./pages/Country";
import { CountryDetails } from "./pages/CountryDetails";


const App=()=>{
  const router =createBrowserRouter([
    {
      path: "/",
      element:<PageLayout/>,
      errorElement:<ErrorPage/>,
      children:[
        {
          path :"/",
          element : <Home/>,
        },
        {
          path :"about",
          element : <About/>,
        },
        {
          path :"contact",
          element : <Contact/>,
        },
        {
          path :"country",
          element : <Country/>,
        },
        {
          path :"country/:id",
          element : <CountryDetails/>,
        },
      ]}

  ])
  
  return <RouterProvider router={router}/>
}

export default App;
