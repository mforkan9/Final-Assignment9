import React, { useContext, useState } from 'react';
import { CountryDropdown, CountryRegionData, RegionDropdown } from 'react-country-region-selector';
import { Link } from 'react-router-dom';
import { ContextUse } from '../../App';
import './Booking.css'
import Search from './Search'
const Booking = (props) =>{
    const {value2} = useContext(ContextUse)
    const [cart,setCart] = value2;
    const handler = () =>{
        setCart(cart)
    }
   const {value3,value4} = useContext(ContextUse)
   
   const [place,setPlace] = value3;
   const [place2,setPlace2] = value4;

    const checkLayer = (e) =>{
        const {value} = e.target; 
        const selectRegion = {region:value}
        setPlace(selectRegion)  
    }
    const check = (e) =>{
        const {value} = e.target; 
        const selectRegion = {region:value}
        setPlace2(selectRegion)  
    }
    // const [region,setRegion] = useState({
    //     country:'',
    //     region:''
    // })
    // const selectCountry = (val) =>{
    //     const electCountry = {country:val}
    //     setRegion(electCountry)
    // }
    // const selectRegion = (val) =>{
    //     const electRegion = {region:val}
    //     setRegion(electRegion)
    // }
    return (
        <div className='container'>
            {/* <CountryDropdown 
              value={region.country}
              onChange={(val) =>selectCountry(val)}
            />
               <RegionDropdown
                           country={region.country}
                           value={region.region}
                           onChange={(val) => selectRegion(val)}
                      />
                      <CountryRegionData/> */}

            <div className='row'>
                <div className='booking-form col-md-4'>
                    <h4>Go to.... <strong>{cart.name}</strong></h4>
                <div class="inputs">
                    <div class="input-group">
                        <label for=''>Pick From </label>
                        <select className='input' value={place2.region} onChange ={(e) => check(e)}>
                        <option value="Mirpur">Mirpur</option>
                        <option value="Bonani">Bonani</option>
                        <option value="Golshan">Golshan</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Mohakali">Mohakali</option>
                        <option value="Golshan">GolShan</option>
                        <option value="AB Block">AB Block</option>
                        <option value="Dc hill">Dc Hill</option>
                        <option value="Golshan">Golistan</option>
                        <option value="Golshan">Golshan</option>
                        </select>
    
                    </div>
                    <div class="input-group">
                        <label for="">Pick to......</label>
                        <select className='input' value={place.region} onChange ={(e) => checkLayer(e)}>
                        <option value="Mirpur">Gulshan</option>
                        <option value="Bonani">Bonani</option>
                        <option value="Golshan">Golshan</option>
                        <option value="Gazipur">Gazipur</option>
                        <option value="Mohakali">Mohakali</option>
                        <option value="Golshan">GolShan</option>
                        <option value="AB Block">AB Block</option>
                        <option value="Dc hill">Dc Hill</option>
                        <option value="Golshan">Golistan</option>
                        <option value="Golshan">Golshan</option>
                        </select>
                     
                    </div>
                  
                </div>
                <Link to='/details'><button onClick={() => handler(props)} className='btn btn-warning'>search</button></Link>
                </div>
                <div className='col-md-7'>
                    <Search></Search>
                </div>
            </div>
           
        </div>
    );
};

export default Booking;