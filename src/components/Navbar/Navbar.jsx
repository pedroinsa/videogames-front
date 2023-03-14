import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'

class Navbar extends React.Component{


render(){
    return (<div className='nav'>
        <Link to="/home">Home</Link>
        <Link to="/create">Create Videogame</Link>
        <Link to="/about">About</Link>
    </div>)
}

}

export default Navbar

