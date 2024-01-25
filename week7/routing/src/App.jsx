import {BrowserRouter, Route, Routes} from "react-router-dom"
import { Suspense, lazy, useState } from "react"
import Landing from "./pages/Landing"
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Navbar = lazy(() => import("./components/Navbar"))
import Footer from "./components/Footer"
import Count from "./components/Count";
import Button from "./components/Button";
import { CountContext } from "./context";

const App = () => {

  const [count, setCount] = useState(0);

  return (
    // <BrowserRouter>
    //   <Navbar/>
    //   <Routes>
    //     <Route path="/" element={<Suspense fallback={"loading..."}><Landing/></Suspense>}/>
    //     <Route path="/dashboard" element={<Suspense fallback={"loading..."}><Dashboard/></Suspense>}/>
    //   </Routes>
    //   <Footer/>
    // </BrowserRouter>
    <CountContext.Provider value={{count, setCount}}>
      <Count/>
    </CountContext.Provider>
  )
}

export default App