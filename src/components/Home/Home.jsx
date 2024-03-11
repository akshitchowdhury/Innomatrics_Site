import React, { useEffect, useState } from 'react'
import './Home.css'

const Home = () => {
  
  
    const[isAnimating, setIsAnimating] = useState(true);
    useEffect(() => {
        const interval = setInterval(() => {
            setIsAnimating(prevState => !prevState); // Toggle animation state
        }, 1000); // Adjust the delay according to your preference (in milliseconds)

        // Cleanup function to clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []); // Empty dependency array ensures this effect runs only once on mount
    return (<>    <div className={`home ${isAnimating? 'animate' : '' }`}  >


            
    </div>
    </>

  )
}

export default Home