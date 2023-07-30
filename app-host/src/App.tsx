import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Signup } from "./module-signup"
import { Signin } from "./module-signin"
import { Home } from "./module-home"
import "./App.css"

// function App() {
//   return <div>
//     <Home/>
//     {/* <div>
//       <form>
//         <input type="text" id="fname" name="fname" />
//       </form>
//     </div> */}
//   </div>
// }

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
export default App
