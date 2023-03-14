import React from "react";
import './Paginado.css'
function Paginado (props){
const pageNumbers= []
for (let i=0; i< Math.ceil(props.videogames/ props.porPage);i++){
  pageNumbers.push(i+1)    
}
return(<div className="paginado">
       
           {pageNumbers && pageNumbers.map(number =><span className="paginadoSpan" key={number}>
               <a onClick={()=>props.paginado(number)}>{number}</a>
           </span>)}


        
</div>)

}

export default Paginado