import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = (props) => {
    const {name,img} = props.vehicle;
    return (
   <div className='container'>
     <div className="card">
           <div className="face1">
                <div className="">
                    <img src={img} alt=""/>
                </div>
                <div className=''>
                    <Link to='/about'>
                <div class="product-details"> 
                       <div class="buttons d-flex flex-row">
                               <button onClick={() => props.handleSearch(props.vehicle)} class="btn btn-success cart-button btn-block">{name}</button>
                        </div>
                </div>
                </Link>
                </div>
           </div>
           
       </div>
   </div> 

    );
};

export default Home;