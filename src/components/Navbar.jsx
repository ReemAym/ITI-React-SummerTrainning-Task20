import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div style={{backgroundColor:"rgb(0, 171, 255)",padding:"15px",display:"flex",justifyContent:"space-evenly"}}>
            <Link style={{color:"white",textDecoration:"none"}} to="/">Home</Link>
            <Link style={{color:"white",textDecoration:"none"}} to="/allmoves">Moves</Link>
            <Link style={{color:"white",textDecoration:"none"}} to="/Contacts">Contacts</Link>
            {/* <Link to="/Movedatail">Move datails</Link> */}

        </div>
    );
}

export default Navbar;
