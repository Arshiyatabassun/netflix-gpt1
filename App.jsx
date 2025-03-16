
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css'
import Body from './components/Body'
import Login from './components/Login';
import Browse from './components/Browse';
function App () {
 
  
  return (
    <>
  {/* <Body />  */}
  {/* <Provider store ={appStore} /> */}
  <BrowserRouter basename ="/">
  <Routes>
    <Route path="/" element ={<Body />}>
    <Route path="/" element ={<Login />} />
    <Route path ="/browse" element={<Browse />}/> 
    </Route>
  </Routes>
  </BrowserRouter>
    </>
  );
}

export default App;
