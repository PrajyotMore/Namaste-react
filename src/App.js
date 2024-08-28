import React , {lazy, Suspense} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import ContactUS from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
// import Grocery from "./components/Grocery";

// const info = React.createElement(
//   "div",
//   { id: "parent" },[
//   React.createElement("div", { id: "child1" },
//   [
//   React.createElement("h1", {},"Hello I am Prajyot More"),
//   React.createElement("h2", {},"We are building React App")
// ]), React.createElement("div", { id: "child2" },
// [
// React.createElement("h1", {},"Hello H1 Tag"),
// React.createElement("h2", {},"Hello H2 Tag")
// ])]
// );

// confict driven ui

// are website are driven by data
// controlling ur ui by data that data will come from backend

// UI Layer and Data Layer makes the Frontend websites


//keys in map method
// to avoid re rendering we must use key if we not use key then it will throw warning
// react itself tells do not use index its not recommended


// Chunking
// Code Splitting
// Dynamic Bundling
// lazy Loading
// on demand loading
// dynamic import

const Grocery = lazy(()=> import("./components/Grocery"))
const About = lazy(()=> import("./components/About"))
const AppLayout = () => {
  return (
    <div className="app">
      <Header/>
      <Outlet/>
    </div>
  );
};

const appRoute = createBrowserRouter([{
  path: '/',
  element: <AppLayout/>,
  children: [
    {
      path: '/',
      element: <Body/>
    },
    {
      path: '/about-us',
      element: <Suspense fallback={<h1>Loading...</h1>}><About/></Suspense>,
    },
    {
      path: '/contact-us',
      element: <ContactUS/>,
    },
    {
      path: "/restaurants/:resId",
      element: <RestaurantMenu/>,
    },{
      path: "/grocery",
      element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>,
    }
  ],
  errorElement : <Error/>
},

])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoute} />);
