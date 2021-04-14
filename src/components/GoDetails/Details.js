import React, { useContext } from 'react';
import { ContextUse } from '../../App';
import Search from '../Map/Search'
import './Details.css'
import image from './peopleicon.png'
const Details = () => {
    const {value2,value3,value4} = useContext(ContextUse)
    const [cart,setCart] = value2;
    const [place,setPlace] = value3;
    const [place2,setPlace2] = value4
    return (
        <div className='container'>
            <div className="row">
                <div className="detail-show col-md-4">
                    <div className="D-card">
                       <h3 className='text-center'>{place2.region}</h3>
                       <br/>
                       <h3 className='text-center'>{place.region}</h3>
                    </div>

                    <div className='F-card d-flex p-3 align-items-center'>
                        <img className='d-img' src={cart.img} alt=""/>
                        <div className='d-flex p-3 align-items-center'>
                             <div className="col-md-9 d-flex justify-content-between">
                            <h4>{cart.name}</h4>
                            <img className='icon-img' src={image} alt=""/>
                            <h4>{cart.sit}</h4>
                            </div>
                            <div className="col-md-3 text-md-right text-center">
                                <h5>${cart.rent}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="F-card d-flex p-3 align-items-center">
                    <img className='d-img' src={cart.img} alt=""/>
                        <div className='d-flex p-3 align-items-center'>
                        <div className="col-md-9 d-flex justify-content-between">
                            <h4>{cart.name}</h4>
                            <img className='icon-img' src={image} alt=""/>
                            <h4>{cart.sit}</h4>
                            </div>
                            <div className="col-md-3 text-md-right text-center">
                            <h5>${cart.rent}</h5>
                            </div>
                        </div>
                    </div>

                    <div className="F-card d-flex p-3 align-items-center">
                    <img className='d-img' src={cart.img} alt=""/>
                        <div className='d-flex p-3 align-items-center'>
                            <div className="col-md-9 d-flex justify-content-between">
                            <h4>{cart.name}</h4>
                            <img className='icon-img' src={image} alt=""/>
                            <h4>{cart.sit}</h4>
                            </div>
                            <div className="col-md-3 text-md-right text-center">
                            <h5>${cart.rent}</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map col-md-7">
                    <Search></Search>
                </div>
            </div>
        </div>
    );
};

export default Details;