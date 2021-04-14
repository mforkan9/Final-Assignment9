import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextUse } from '../../App';
import './Header.css'



const Header = () => {
    const {value}= useContext(ContextUse)
    const  [loggedInUser,setLoggedInUser] = value;

    return (
        <div className=''>
            <nav className="nav">
            <div class="container">
        <div class="logo">
            <Link to='/home'>Rough Rider</Link> 
        </div>
        <div class="main_list" id="mainListDiv">
            <ul>
               <Link to='/home'><li><a href=''>Home</a></li></Link> 
               <Link to='/about'>  <li><a href="">About</a></li></Link> 
                <Link to='/details'>
                    <li><a href="#">my work</a></li>
                    </Link>
                <li><a href="#">disegn</a></li>
              {
                  loggedInUser.isSignIn 
                  ?
                 <li><b>{loggedInUser.name}</b></li>
                 :
                 <Link to='/login'><li><button className='btn btn-warning'>Login</button></li></Link>
              } 
            </ul>
        </div>
        </div>
            </nav>
       </div>
    );
};

export default Header;