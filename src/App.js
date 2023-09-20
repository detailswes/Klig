import { Routes, Route, BrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import Layout from "./layout";

function App() {
 return (
   <div className="App">
    <Layout>
     <BrowserRouter>
       <Routes>
         <Route>
           <Route path="/" element={<Home />} />
         </Route>
       </Routes>
     </BrowserRouter>
     </Layout>
   </div>
 )
}

export default App
