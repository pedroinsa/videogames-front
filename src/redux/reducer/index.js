import {
    GET_ALL_VIDEOGAMES,
    GET_VIDEOGAME_DETAILS,
    GET_VIDEOGAMES,
    CREATE_VIDEOGAME,
    GET_GENRE,
    FILTER_BY_ORIGIN,
    FILTER_BY_GENRE,
    SORT_OF_LIST,
    GET_PLATFORMS,
    CLEAN_DETAIL,
    CLEAN_ALL,
    FILTER_PLATFORM
 } from "../actions";
 import { compareAZ,compareZA,compareRating, compareID } from "./funciones";
 
 const initialState = {
    videogames: [],
    videogamesComplete: [],
    videogameDetail: {},
    genres: [],
    platforms: [],
    form: {}
 };
 
//  arg.forEach(elem=> elem.platforms.forEach(x=> array.push(x.platform.name)))
 
 const rootReducer = (state = initialState, action) => {
   // eslint-disable-next-line default-case
   switch (action.type) {
    case GET_ALL_VIDEOGAMES:
       return{...state, videogames: action.payload, videogamesComplete: action.payload}
    case GET_VIDEOGAME_DETAILS:
       return {...state,videogameDetail: action.payload}
    case GET_VIDEOGAMES: 
    return {...state, videogames:action.payload }   
    case FILTER_BY_ORIGIN:
       let allgames = state.videogamesComplete
       let filtrado
       if(action.payload === "createdInDb"){
          filtrado = allgames.filter(e=> e.createdInDb)
        }else if(action.payload === "all"){  filtrado = allgames}
        else if(action.payload === "Api") {filtrado = allgames.filter(e=> !e.createdInDb)
        }
       const error = {error: "No hay resultados"}
        return{...state, videogames: filtrado.length? filtrado: [error]}
      case GET_GENRE :
         return{...state, genres: action.payload}
      case FILTER_BY_GENRE:
       let allVideogames2 = state.videogamesComplete 
       let filter
       if(action.payload ==="all"){ filter= allVideogames2
       }else{
           filter =  allVideogames2.filter(x=> x.generos.some(x=> x.id== action.payload))
       }
       const errores = {error: "No hay resultados"}
       return{...state, videogames: filter.length? filter: [errores]}
       case SORT_OF_LIST:
          let byOrder
          if(action.payload ==="indistinto"){
             byOrder = state.videogames.sort(compareID)
          }else if(action.payload === "Descendente"){
             byOrder = state.videogames.sort(compareAZ)
          }else if(action.payload === "Ascendente"){
             byOrder = state.videogames.sort(compareZA)
          }else if(action.payload === "Rating"){
             byOrder= state.videogames.sort(compareRating)
          }
          return{...state, videogames: byOrder}
          
    case GET_PLATFORMS:
          let getAll = state.videogamesComplete
          let array = []   
          getAll.forEach(elem=> elem.platforms.forEach(x=> array.push(x.platform.name)))
          const set = new Set(array)
          let allPlatforms = Array.from(set)

          return{...state, platforms: allPlatforms}   
     case CLEAN_DETAIL:
        return {...state, videogameDetail: {}}
     case CREATE_VIDEOGAME:
        return{...state, form: action.payload}


    default: return state
   }

 };
 
 export default rootReducer;
 