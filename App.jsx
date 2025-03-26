
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css'
import Body from './components/Body'
import Login from './components/Login';
import Browse from './components/Browse';
import appStore from './utils/appStore';
import {Provider} from "react-redux";
function App () {

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
