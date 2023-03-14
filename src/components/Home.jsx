import React from 'react';
import Searchbar from './Searcbar/Searchbar.jsx'
import Container from './Container/Container.jsv';
import Navbar from './Navbar/Navbar.jsx';
import './Home.css';

class Home extends React.Component{
 
constructor(props){
    super(props)
}

render(){
    return (
        <div className='home'>
            <Searchbar/>
            <Container/>
            <h1>SOY EL HOME</h1>
        </div>
    )
}

}

export default Home