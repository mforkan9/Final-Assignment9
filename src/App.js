import './App.css';
import Booking from './components/Map/Booking';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header/Header';
import Login from './components/LoginPage/Login';
import { createContext, useState } from 'react';
import PrivateRoute from './components/LoginPage/PrivateRoute';
import LoadData from './components/LoadData/LoadData';
import Details from './components/GoDetails/Details';

export const ContextUse = createContext()
function App() {
  const [loggedInUser,setLoggedInUser] = useState({})
  const [cart,setCart] = useState([])
  const [place,setPlace] = useState({
    region:''
})
const [place2,setPlace2] = useState({
  region:''
})
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')
const [emailError,setEmailError] = useState('')
const [passwordError,setPasswordError] = useState('')
const [name,setName] = useState('')
  return (
<ContextUse.Provider value={
    {
    value:[loggedInUser,setLoggedInUser], 
    value2:[cart,setCart], 
    value3:[place,setPlace],
    value4:[place2,setPlace2],
    email1:[email,setEmail],
    password2:[password,setPassword],
    emailError4:[emailError,setEmailError],
    passwordError5:[passwordError,setPasswordError],
    name6:[name,setName]
    }
  }>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path='/'>
             <LoadData></LoadData>
        </Route>
        <Route  path='/home'>
            <LoadData></LoadData>
        </Route>
        <PrivateRoute path='/about'>
          <Booking></Booking>
        </PrivateRoute>
        <PrivateRoute path='/details'>
          <Details></Details>
        </PrivateRoute>
        <Route path='/login'>
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </ContextUse.Provider>
    
  );
}

export default App;
