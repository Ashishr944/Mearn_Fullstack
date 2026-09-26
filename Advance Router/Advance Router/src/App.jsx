// import { BrowserRouter, Route, Routes} from "react-router"
// import Contact from "./Components/Contact";
// import Home from "./Components/Home";
// import Navbar from "./Components/Navbar";
// import Users from "./Components/Users";
// import Posts from "./Components/Post";
// import React, { lazy, Suspense } from 'react'
// import About from "./Components/About";

// const Home = lazy(() => import("./Components/Home"))
// const Users = lazy(() => import("./Components/Users"))
// const Posts = lazy(() => import("./Components/Post"))
// const About = lazy(() => import("./Components/About"))
// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>

//       <Suspense fallback={<h1>Loading...</h1>}>

//         <Navbar/>
//         <Routes>
//           <Route path="/" element={<Home/>}></Route>

//           <Route path="/about" element={<About/>}></Route>

//           <Route path="/contact" element={<Contact/>}></Route>

//           <Route path="/user" element={<Users/>}></Route>

//           <Route path="/posts/:id" element={<Posts />}/>

//         </Routes>
//       </Suspense>
//       </BrowserRouter>
//     </div>
//   )
// }

// export default App


import { BrowserRouter, Route, Routes } from "react-router";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import React, { lazy, Suspense } from "react";

const About = lazy(() => import("./Components/About"));
const Home = lazy(() => import("./Components/Home"));
const Users = lazy(() => import("./Components/Users"));
const Posts = lazy(() => import("./Components/Post"));

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/user" element={<Users />} />

            <Route path="/posts/:id" element={<Posts />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
};

export default App;
