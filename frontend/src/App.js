import { Navbar } from "./components/Navbar";
import { About } from "./components/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./components/Home";
import NoteState from "./contexts/notes/noteStates";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";



  

const Animated = () => {
  const location = useLocation();

 
  return (
    <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>
              </Switch>
    </AnimatePresence>
  );
};

function App() {

  const [alert, setalert] = useState(null);
  const showAlert = (message, type) => {
    setalert({
      type: type,
      message: message,
    });
  };
  setTimeout(() => {
    setalert(null);
  }, 3000);
  
  return (
   
      <NoteState>
        <Router>
        <Navbar showAlert={showAlert} />
        <Alert alert={alert} />
        <div className="container">
        <Route exact path="/notes">
            <About showAlert={showAlert}/>
          </Route>
          <Route exact path="/home">
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/" >
            <Home showAlert={showAlert}/>
          </Route>
          <Route exact path="/login">
            <Login showAlert={showAlert}/>
          </Route>
          <Route exact path="/signup" >
            <Signup  showAlert={showAlert}/>
          </Route>
          <Animated />
          </div>
        </Router>
      </NoteState>
    
  );
}

export default App;

// function App() {
//   const [alert, setalert] = useState(null);
//   const showAlert = (message,type) => {
//     setalert({
//       type:type,
//       message:message

//     })
//   }
//   setTimeout(() => {
//     setalert(null);
//   }, 3000);
//   return (
//     <>
//     <NoteState>
//     <Router>
//     <Navbar showAlert={showAlert}/>
//     <Alert alert={alert}/>
//     <div className="container">
//       <Switch>
//           <Route exact path="/notes">
//             <About showAlert={showAlert}/>
//           </Route>
//           <Route exact path="/home">
//             <Home showAlert={showAlert}/>
//           </Route>
//           <Route exact path="/" >
//             <Home showAlert={showAlert}/>
//           </Route>
//           <Route exact path="/login">
//             <Login showAlert={showAlert}/>
//           </Route>
//           <Route exact path="/signup" >
//             <Signup  showAlert={showAlert}/>
//           </Route>
//         </Switch>
//         </div>
//     </Router>
//     </NoteState>

//  </>
//   )
// }

// export default App;
