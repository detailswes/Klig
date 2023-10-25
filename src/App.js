import { Routes, Route, BrowserRouter } from "react-router-dom"
import Workflow from "./pages/Workflow"
import Dashboard from "./pages/Dashboard"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import Layout from "./layout";

function App() {
 return (
   <div className="App">
   
     <BrowserRouter>
     <Layout>
       <Routes>
         <Route>
       
           <Route path="/" element={<Workflow />} />
           <Route path="/dashboard" element={<Dashboard />} />
           <Route path="/signup" element={<Signup />} />
           <Route path="/login" element={<Login />} />
         
         </Route>
       </Routes>
       </Layout>
     </BrowserRouter>
   
   </div>
 )
}

export default App
