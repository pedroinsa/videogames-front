import React from 'react';
import { useDispatch } from 'react-redux';
import image from "../videogame.jpg"
import {Link} from 'react-router-dom'
import './Landing.css';
import * as actions from '../../redux/actions/index'
import * as Yup from 'yup'
import { useFormik } from 'formik';
function Landing (props){
  const dispatch = useDispatch()
  React.useEffect(()=>{
  dispatch(actions.getGenre())},[])
  return(
        <div className='landing' >
    
          <img src={image}  alt="videogame" />
          <Link to="/home">
            <button>ingresar</button>
          </Link>

        </div>)
};




export default Landing

