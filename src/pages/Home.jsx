import { FaLongArrowAltRight } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Home=()=>{
    return(
        <> 
        <main className="hero-section main">
        <div className="container  grid grid-two-cols">
        <div className="hero-content">
            <h1 className="heading-xl">
            Explore the World, One Country at a Time.
            </h1>
            <p className="paragraph">
            Discover the history, culture, and beauty of every nation. Sort,
            search, and filter through countries to find the details you need.
         
            </p>
         <NavLink to="/Country"> 
           <button className="btn btn-darken btn-inline bg-white-box">  Start Exploring <FaLongArrowAltRight />   </button>
         </NavLink>
        </div>
        <div className="hero-image">
        <img
            src="https://th.bing.com/th/id/OIP.PAsBqJie3xcHe5s7UbEZ6wHaE7?w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2"
            alt="world is beauty"
            className="banner-image"
          />
        </div>
        </div>
        </main>
        </>
    )
}