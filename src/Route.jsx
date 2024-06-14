import React from "react";
import Header from "./Components/Header/header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Components/Footer/Footer.jsx";

// this outlet is a dynamic thing which is provided by react-router, it uses
// this Route as a base and wherever we have used the <outlet/>

// then there it will change the things as we want the footer and header will
// remain same


// Outlet from react-router-dom: This component is essential for rendering content
// from child routes within the layout or Route.

function Route(){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        {/*    In the above the header and footer will remain same but the
          the in between outlet will change as we want*/}
        </>
    )
}

// we can't this route as normal as we want,  as the things are nested, we4
// have the about and contact us pages inside the home page

export default Route;