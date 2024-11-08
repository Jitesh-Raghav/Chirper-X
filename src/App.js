import './App.css';
import HomePage from './Components/HomePage/HomePage';
import Authentication from './Components/Authentication/Authentication';
import {Route,Routes, useNavigate} from 'react-router-dom'; 
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getUserProfile } from './Store/Auth/Action';
import Landing from './Components/Landing/Landing';

function App() {

  const jwt = localStorage.getItem("jwt")
  const {auth}= useSelector(store=>store)
  const dispatch=useDispatch()
  const navigate=useNavigate()

  useEffect(()=>{

    if(jwt){
      dispatch(getUserProfile(jwt))
      navigate("/home")
    }

  },[auth.jwt])

  return (
    <div className="App">
      
     <Routes>
       <Route path="/*" element={auth.user?<HomePage/>:<Landing/>}> </Route>

       {/* <Route path="/*" element={<HomePage/>}>

      </Route> */}
       
     </Routes>

    </div>
  );
}

export default App;
