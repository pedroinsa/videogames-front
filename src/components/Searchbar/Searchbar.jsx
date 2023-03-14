import React from 'react';
import * as actions from '../../redux/actions/index'
import {useDispatch} from "react-redux"
import './Searchbar.css'

function Searchbar(props){
    const [input, setInput]= React.useState("")
    const dispatch = useDispatch()

 function handlerChange(e){
     setInput(e.target.value)
 }
 async function handlerClick(e){
    if(input.length) await dispatch(actions.getVideogames(input))
    props.currentPages()

 }
    return(<div className='searchbar'>
          <input value={input} onChange={handlerChange}/>
          <button onClick={handlerClick}>BUSCAR!</button>

    </div>)
}


export default Searchbar