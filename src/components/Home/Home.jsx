import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Searchbar from '../Searchbar/Searchbar.jsx'
import Container from '../Container/Container.jsx';
import Paginado from "../Paginado/Paginado.jsx"
import Videocard from '../Videocard/Videocard.jsx';

import Navbar from '../Navbar/Navbar.jsx';
import * as actions from '../../redux/actions/index'

import './Home.css';

function Home (props) {
 const dispatch = useDispatch()
 const allVideogames= useSelector(state=>state.videogames)
 const allGenres= useSelector(state=>state.genres)
 const [videogamesPerPage, setVideogamesPerPage] = React.useState(15)
 const [currentPage, setCurrentPage] = React.useState(1)
 const [order, setOrder]= React.useState("indistinto")
 const indexLast = currentPage *videogamesPerPage
 const indexFirst = indexLast - videogamesPerPage
 const currentVideogames = allVideogames.slice(indexFirst,indexLast)
 const paginado = (pageNumber)=>{ setCurrentPage(pageNumber)} 
 function handlerInput(e){
    if(e.target.value!=="placeholder")dispatch(actions.filterByOrigin(e.target.value))
    setCurrentPage(1)
}
function handlerInputGenre(e){
    if(e.target.value!=="placeholder") dispatch(actions.filterByGenre(e.target.value))
    setCurrentPage(1)
}
function handlerInputOrder(e){
    if(e.target.value!=="placeholder")dispatch(actions.sortOfList(e.target.value))
    setCurrentPage(1)
    setOrder(`Order ${e.target.value}`)
}
function currentPages() {
    setCurrentPage(1)
}

 React.useEffect(async ()=>{
    await dispatch(actions.getAllVideogames())
    dispatch(actions.getPlatforms())
 },[])


    return (
        <div className='home'>
            <Navbar/>
            <Searchbar currentPages={currentPages}/>
            <div>
                <label>Origen</label>
                <select onChange={(e)=>handlerInput(e)}>
                    <option value="placeholder">elige origen</option>
                    <option value="all">Todos</option>
                    <option value="Api">Videojuegos API</option>
                    <option value="createdInDb">Personalizados</option>
                </select>
                </div>
               <div>
                <label>Por genero</label>
                <select onChange={(e)=> handlerInputGenre(e)}>
                    <option value="placeholder">elige genero</option>
                    <option value="all">All</option>
                {allGenres && allGenres.map(x=> <option value={x.id}>{x.name}</option>)}

                </select>
                </div>
        
            <div>
                <label>Orden</label>
                <select onChange={(e)=>handlerInputOrder(e)}>
                    <option value="placeholder">elige orden</option>
                    <option value="indistinto">Indistinto </option>
                    <option value="Descendente">A-Z</option>
                    <option value="Ascendente">Z-A</option>
                    <option value ="Rating">Rating</option>
                </select>
            </div>
       

            {!allVideogames.length && <h2>Loading...</h2>}
           
           
            <div className='videocards'>
               {allVideogames.length ===1 &&allVideogames[0].error && <h2>{allVideogames[0].error}</h2>} 
            {!!currentVideogames.length && !allVideogames[0].error && currentVideogames.map(x=><Link to={`/videogame/${x.id}`}> <Videocard key={x.id} rating={x.rating}  image={x.image} name={x.name} genres={x.generos}/></Link>)}
            </div>
            {!!currentVideogames.length && !allVideogames[0].error &&<Paginado porPage={videogamesPerPage} videogames={allVideogames.length} paginado={paginado}/>}
           
        </div>
    )
}



export default Home