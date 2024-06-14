import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Route from './Route.jsx'
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import Contact from "./Components/Contact_us/Contact_us.jsx";
import Know_more from "./Components/Know_more/Know_more.jsx";

// now we will create a router
// this createBrowserRouter is a method provided by react-router,
// it has an array,
// this array contains all the object and the lists we need as below:

// Outlet from react-router-dom: This component is essential for rendering content
// from child routes within the layout or Route.


// Route Object: The array contains a single route object here. A route object
// typically has the following properties:
//

//     path: (Required) A string representing the URL path that this route
//     matches. In this case, '/' matches the root path (the entire application).
//     element: (Required) The React component that should be rendered for this route.
//     Here, it's incorrectly set to <Route />.
//     children: (Optional) An array of nested route objects that define child
//     routes within this parent route.

let router = createBrowserRouter([
    {
        path:'/',
        element: <Route/>,
        children: [
            {
                path:'',
                element:<Home/>
            },
            {
                path:'about',
                element:<About/>
            },
            {
                path:'contact_us',
                element:<Contact/>
            },
            {
                // loader:{()},
                path:'know_more/:kmid',
                element:<Know_more/>
            }
        ]
    }
])
// loader is a more optimising way as it calls or fetches the data even
// before the link is clicked as stores it in cache, it fetches data even
// before the useEffect


// now we will be taking parameters and pass to the url from our router as
// in know_more

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// as you can see we are not Rendering the App we will be using the
// RouteProvider which take only one prop which is router as above

