import './App.css'
import joyImage from "./assets/joy1.jpg"
import SignIn from './components/SignIn'

function App() {
  return (
    <>
   <div style={{width:'100%',height:"100vh",background:"linear-gradient(135deg, rgba(2,215,231,1) 25%, rgba(183,93,217,1) 90%)"}} className='d-flex justify-content-center align-items-center'>
      
        <div style={{height:"85vh",width:"90%"}} className="row login shadow ">
          <div style={{height:"100%"}}  className="col-lg-7 p-0">
          <img style={{height:"100%",width:"100%"}} className='img-fluid' src={joyImage} alt="" />
          </div>
          <div style={{backgroundColor:"white"}} className="col-lg-5 d-flex justify-content-center align-items-center p-0">
             <SignIn/>
          </div>
        </div>
      
   </div>
    </>
  )
}

export default App
