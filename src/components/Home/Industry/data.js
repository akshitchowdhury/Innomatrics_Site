import healthcare from '../../../assets/healthcare.jpg'
import banking from '../../../assets/banking.webp'
import ngo from '../../../assets/ngo.jpg'
import tours from '../../../assets/tours.jpg'
import construction from '../../../assets/construction.jpg'
import security from '../../../assets/security.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBank, faBuilding, faBuildingNgo, faCar, faChild, faEnvelope, faLock, faPaw, faPhone, faSuitcaseMedical, } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faWhatsapp,faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
const data = [

    {
        title : "HEALTHCARE",
        desc: "Seamlessly delivering end-to-end digital health experiences",
        image: healthcare,
        icon: faSuitcaseMedical
    },
    {
        title : "BANKING, FINANCIAL SERVICES & INSURANCE",
        desc: "Driving transformation with our banking, financial services, insurance, and payments experts",
        image: banking,
        icon: faBank
    },
    {
        title : "NGO ORGANISATIONS",
        desc: "Empowering communities and driving impactful change through dedicated efforts",
        image: ngo,
        icon: faBuildingNgo
    },
    {
        title : "TOURS AND TRAVELS",
        desc: "Embark on unforgettable journeys with tailored experiences and exceptional hospitality",
        image: tours,
        icon: faCar
    },
    {
        title : "CONSTRUCTION FIRMS",
        desc: "Building the future with innovative and sustainable solutions",
        image: construction,
        icon: faBuilding
        
    },
    {
        title : "SECURITY",
        desc: "Ensuring safety and peace of mind with cutting-edge protection services",
        image: security,
        icon: faLock
      
    },
]

export default data;