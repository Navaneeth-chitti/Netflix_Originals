import React,{useState , useEffect} from 'react';
import './Nav.css'

function Nav() {
    const [show, handleShow] = useState(false)
    useEffect(() => {

        window.addEventListener("scroll", () => {
            if (window.scrollY > 150) {
                handleShow(true);
            } else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll");
       }
       
    }, [])
    return (
        <div className={`Nav_bar ${show && "nav_black"}`}>
            <img className="Netflix_logo" src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" alt="NETFLIX_LOGO" />
            
            <img className="Netflix_avatar" src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg"alt="NETFLIX_profile_logo"/>
        </div>
    )
}

export default Nav
