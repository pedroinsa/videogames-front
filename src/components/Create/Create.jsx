import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../redux/actions/index'
import Navbar from '../Navbar/Navbar';
import "./Create.css"

function Create (props){
 
    
const [input, setInput] = React.useState({name:"", description:"",released:"", rating: 0, platforms: [], generos: []}) 
const [error, setError] = React.useState({})
const dispatch = useDispatch()      
const platforms = useSelector(state=> state.platforms)  
const genres = useSelector(state=> state.genres)  
const form = useSelector(state => state.form) 
function handlerInput(e){
        setInput({...input, [e.target.name]: e.target.value})
        setError(validate({...input,[e.target.name]: e.target.value}))
}
function handlerInputRating(e){
        setInput({...input, [e.target.name]: parseInt(e.target.value)})
        setError(validate({...input, [e.target.name]: parseInt(e.target.value)}))
}
function handlerSelectOptions(e){
        setInput({...input, [e.target.name]: Array.from(e.target.selectedOptions, (elem) =>{return{platform: {name: elem.value }}})})
        setError(validate({...input, [e.target.name]: Array.from(e.target.selectedOptions, (elem) =>{return{platform: {name: elem.value }}})}))
}
function handlerSelectOptions2(e){
        setInput({...input, [e.target.name]: Array.from(e.target.selectedOptions, (elem) => parseInt(elem.value))})
        setError(validate({...input, [e.target.name]: Array.from(e.target.selectedOptions, (elem) => parseInt(elem.value))}))
}
function handlerSubmit(e){
        e.preventDefault()
       if(input.name.length && !error.name && !error.description && !error.released && !error.rating && !error.platforms && !error.generos ) dispatch(actions.createVideogame(input))
}
function validate(input){
        const errores= {}
if(!input.name.length){
     errores.name = "Debe proporcionar un nombre"
  }else if(input.name.length < 4 || input.name.length > 20){
   errores.name = "El nombre debe tener entre 4 y 20 caracteres"
  } else if(!input.description){
         errores.description = "Debe proporcionar una descripcion" 
  }else if(input.description.length < 10 || input.description.length > 50){
        errores.description = "La descripcion deber tener entre 10 y 50 caracteres"
  }else if(input.released.length <10 || input.released.length >10){
          errores.released = "Debe ingresar una fecha correcta"
  }else if(parseInt(input.released.slice(0,4))> 2022 || parseInt(input.released.slice(0,4))<1985){
          errores.released = "Debe ingresar un año valido"
  }else if(input.rating <1 || input.rating> 10){
          errores.rating = "El rango del rating es de 1 a 10"
  }else if(!input.platforms.length){
          errores.platforms = "Platforms debe tener al menos un item"
  }else if(!input.generos.length){
        errores.generos = "Generos debe tener al menos un item"
 }
 return errores
}
return (<div className='create'> 
        <Navbar/>
        <h1>CREA TU PROPIO VIDEOJUEGO!</h1>
        <form onSubmit={handlerSubmit} > 
        <div className='createName'>
           <label>Nombre:</label>
           <input onChange={handlerInput} name="name" type="text" />
         </div>
         <div className='createDescription'>
           <label>Descripcion:</label>
           <input onChange={handlerInput} name= "description" type="text"/>
         </div>  
         <div className='createReleased'>
           <label>Lanzamiento:</label>
           <input onChange={handlerInput} name="released" type="date" />
        </div>  
       <div className='createRating'>
           <label>Rating:</label>
           <select name="rating"  onChange={handlerInputRating}>
                   <option value="0">-</option>
                  <option value ="1">1</option> 
                  <option value ="2">2</option> 
                  <option value ="3">3</option> 
                  <option value ="4">4</option> 
                  <option value ="5">5</option> 
                  <option value ="6">6</option> 
                  <option value ="7">7</option> 
                  <option value ="8">8</option> 
                  <option value ="9">9</option> 
                  <option value ="10">10</option> 
           </select>
         </div>    
         <div className='createPlatforms'>       
           <label>Plataformas: </label>
          <select onChange={handlerSelectOptions} name="platforms" multiple={true}>
                  {platforms && platforms.map(x=> <option key={x} value={x}>{x}</option>)}

          </select>
         </div>  
         <div className='createGenres'>
          <label>Generos:</label>
          <select  onChange={handlerSelectOptions2} name="generos" multiple={true}>
               {genres && genres.map(elem=> <option key={elem.id} value={elem.id}>{elem.name}</option>)}
          </select>
         </div>  
          {error.name && <p>{error.name}</p>}
       {error.description &&  <p>{error.description}</p>}
       {error.released && <p>{error.released}</p>}
       {error.rating && <p>{error.rating}</p>}
       {error.platforms && <p>{error.platforms}</p>}
       {error.generos && <p>{error.generos}</p>}
       

    { !!input.name.length && !error.name && !error.description && !error.released && !error.rating && !error.platforms && !error.generos &&  <button className='buttonCreate' >Crear!</button>}
      {form.error? <h2>{form.error}</h2>:null}
      {form.success?<h2>{form.success}</h2>: null}
        </form>
        </div>
                )
}

export default Create


// - Nombre
// - Descripción
// - Fecha de lanzamiento
// - Ratingn