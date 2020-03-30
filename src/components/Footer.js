import React from 'react';
import twitter from "../icons/twitter2.png"; 


const Footer = () => (
    <>
        <footer>
            <p className="date"> &copy; 2020</p>
            <p className="rights"><i>Designed & Built by Nate Lloyd</i></p>
            <div className="icons">
    
            <a href='/https://twitter.com/nateknown' className="icon" >
                <img src={twitter} link="" alt="twitterwidget" width="100%"  className="icon" />
            </a>
            </div>
        </footer>
    </>
);

export default Footer;
