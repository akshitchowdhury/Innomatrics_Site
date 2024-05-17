import React from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
// import { Bounce } from "react-swift-reveal";
// import MapLeaflet from './MapLeaflet/MapLeaflet';
import InquiryAndMapComponent from './InquiryForm/InquiryForm';


const Conatct = () => {
  return (
    <div className='contact h-[170vh]  md:h-[100vh]'>
    
    
    <InquiryAndMapComponent/>
    </div>
  )
}

export default Conatct