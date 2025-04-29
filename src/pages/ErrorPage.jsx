import { useRouteError } from "react-router-dom"
import { NavLink } from "react-router-dom";
export const ErrorPage=()=>{
    const error =useRouteError();
    console.log(error);
    

    return(
        <>
        
        <h1> some error occured</h1>
        if(error && <p>{error.data} {error.status}</p> )
        <NavLink to="/"> <button>Go Back to Home</button> </NavLink>
        </>
    )
}