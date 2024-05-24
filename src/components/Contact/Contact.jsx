import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
// import { Bounce } from "react-swift-reveal";
// import MapLeaflet from './MapLeaflet/MapLeaflet';
import InquiryAndMapComponent from './InquiryForm/InquiryForm';
import CountRise from '../Home/CountRise/CountRise';


const Conatct = () => {
  return (
    <div className='contact h-[170vh]  md:h-[100vh]'>
    
    
    <InquiryAndMapComponent/>
    {/* <CountRise/> */}
    </div>
  )
}

export default Conatct