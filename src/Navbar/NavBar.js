import React, {useEffect, useState} from 'react'
import './NavBar.css'

export default function NavBar() {
    const [show, handleShow] = useState(false)

    // if pass more than 100 show Navbar
    const transitionNavBar = () => { 
        if(window.scrollY > 100){
            handleShow(true)
        } else {
            handleShow(false)
        }
    }
    // only runs when the componentDiMount
    useEffect(() => { 
        window.addEventListener('scroll', transitionNavBar) // add
        return () => window.removeEventListener('scroll', transitionNavBar) // remove (cleanup)
    }, [])

  return (
      // only comes down after a certain point 
    <div className={`nav ${show && `nav_black`}`}>
        <div className='nav__components'>
        <img className='hulu--logo' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png' alt='hulu-logo' />
        <img className='user--logo' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-Gh6uC11b9BUzfJ1OAuC3MgwwQdOLZL7PA&usqp=CAU' />
        </div>
    </div>
  )
}
