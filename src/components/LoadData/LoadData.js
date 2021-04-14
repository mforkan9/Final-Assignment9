import React, { useContext, useState } from 'react';
import { ContextUse } from '../../App';
import fakeData from '../fakeData/fakedata';
import Details from '../GoDetails/Details';
import Home from '../Home/Home';
import Booking from '../Map/Booking';
import './LoadData.css'

const LoadData = () => {
    const fkData = fakeData;
    const [ride,setRide] = useState(fkData)
    const {value2}= useContext(ContextUse)
    const [cart,setCart] = value2
    const handleClick = (vehicle) =>{
        console.log(vehicle)
        setCart(vehicle)

    }
    return (
        <div className='app-header d-flex align-items-center justify-content-center'>
            {
                ride.map(gari => <Home vehicle={gari} handleSearch={handleClick}></Home>,
                    <Booking  handler={handleClick}></Booking>
                    )
            }
        </div>
    );
};

export default LoadData;