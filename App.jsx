
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Body from './components/Body'
import Login from './components/Login';
import Browse from './components/Browse';
import appStore from './utils/appStore';
import {Provider} from "react-redux";
// import { useEffect } from 'react';
// import { onAuthStateChanged } from "firebase/auth"
// import { auth } from './utils/firebase';
// import { addUser, removeUser } from './utils/userSlice';
// import{ useDispatch,useSelector} from "react-redux"
function App () {
  // const userData = useSelector(store =>store.user)
  // console.log(userData)
  // const dispatch =useDispatch();

  // useEffect(()=>{
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
       
  //       const {uid,email,displayName} =user;
  //     dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      
  //     } else {
  //       dispatch(removeUser())
  //     }
  //   });
  // },[])
   
  return (
    <>
  <Provider store ={appStore}>
  {/* <Body />  */}
  <BrowserRouter basename ="/">
  <Routes>
    <Route path="/" element ={<Body />}>
    <Route path="/" element ={<Login />} />
    <Route path ="/browse" element={<Browse />}/> 
    </Route>
  </Routes>
  </BrowserRouter>
  </Provider>
    </>
  );
}

export default App;
