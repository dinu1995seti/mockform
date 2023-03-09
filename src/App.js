import './App.css';
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import {ToastContainer} from "react-toastify"
function App() {
  return (
  <>
  <ToastContainer></ToastContainer>
      <Navbar/>
      <Home/>
  </>
  );
}

export default App;
