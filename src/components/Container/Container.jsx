import React from 'react';
import Videocard from '../Videocard/Videocard.jsx';

class Container extends React.Component{


    render(){
        return (<div>
            

        {this.props.items? this.props.items.map(x=>x):<h1>Jajajaja</h1>} 
         <button onClick={this.props.prev}>Prev</button>
         <span>Pagina {this.props.current} </span>
         <button onClick={this.props.next}> Next</button>
        
        </div>)
    }
}

export default Container