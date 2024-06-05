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
        title : "Healthcare",
        desc: "Seamlessly delivering end-to-end digital health experiences",
        image: healthcare,
        icon: faSuitcaseMedical
    },
    {
        title : "Banking, Financial Services & Insurance",
        desc: "Driving transformation with our banking, financial services, insurance, and payments experts",
        image: banking,
        icon: faBank
    },
    {
        title : "NGO Organizations",
        desc: "Empowering communities and driving impactful change through dedicated efforts",
        image: ngo,
        icon: faBuildingNgo
    },
    {
        title : "Tours And Travels",
        desc: "Embark on unforgettable journeys with tailored experiences and exceptional hospitality",
        image: tours,
        icon: faCar
    },
    {
        title : "Construction Firms",
        desc: "Building the future with innovative and sustainable solutions",
        image: construction,
        icon: faBuilding
        
    },
    {
        title : "Security",
        desc: "Ensuring safety and peace of mind with cutting-edge protection services",
        image: security,
        icon: faLock
      
    },
]

export default data;