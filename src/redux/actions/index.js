const axios = require('axios')
export const GET_ALL_VIDEOGAMES = 'GET_ALL_GAMES';
export const GET_VIDEOGAMES = "GET_VIDEOGAME"
export const GET_VIDEOGAME_DETAILS = 'GET_VIDEOGAME_DETAILS';
export const CREATE_VIDEOGAME = 'CREATE_VIDEOGAME';
export const GET_GENRE = 'GET_GENRE';
export const FILTER_BY_ORIGIN = 'FILTER_BY_ORIGIN'
export const FILTER_BY_GENRE = "FILTER_BY_GENRE"
export const SORT_OF_LIST = "SORT_OF_LIST"
export const GET_PLATFORMS = "GET_PLATFORMS"
export const CLEAN_DETAIL = "CLEAN_DETAIL"
export const CLEAN_ALL = "CLEAN_ALL"
export const FILTER_PLATFORM = "FILTER_PLATFORM"

const url = 'https://videogames-backend.vercel.app/'
export const getAllVideogames = () => dispatch=> fetch(`https://videogames-backend.vercel.app/videogames`)
.then(data=>data.json())
.then(data=> dispatch({type: GET_ALL_VIDEOGAMES, payload: data}))
.catch(e=> console.log(e))
export const getVideogames = (name) => dispatch=> fetch(`https://videogames-backend.vercel.app/videogames?name=${name}`)
.then(data=>data.json())
.then(data=> dispatch({type: GET_VIDEOGAMES, payload: data}))
.catch(e=> console.log(e))

export const getVideogameDetails = (id) => dispatch => fetch(`https://videogames-backend.vercel.app/videogame/${id}`)
.then(data=> data.json())
.then(data=> dispatch({type: GET_VIDEOGAME_DETAILS, payload: data}))
.catch(e=> console.log(e))

export const createVideogame =  (input)=> (dispatch) =>{
  axios.post("https://videogames-backend.vercel.app/", input).then(results=> results.data)
  .then(data=> dispatch({type: CREATE_VIDEOGAME,payload: data })).catch(e=>dispatch({type: CREATE_VIDEOGAME, payload: e.response.data}))
}
export const getGenre = () => dispatch => fetch('https://videogames-backend.vercel.app/genres')
.then(data=> data.json()).then(data=> dispatch({type: GET_GENRE, payload: data}))
export const filterByOrigin=(origin)=>{return {type: FILTER_BY_ORIGIN, payload: origin}}

export const filterByGenre = (payload)=>{return {type: FILTER_BY_GENRE, payload}}

export const sortOfList = (payload) => {return {type: SORT_OF_LIST, payload}}

export const getPlatforms=()=>{return {type: GET_PLATFORMS}} 

export const cleanDetail = ()=>{return {type: CLEAN_DETAIL  }}
export const cleanAll = ()=>{return {type: CLEAN_ALL  }}

export const filterByPlataforma = (value)=>{return{type: FILTER_PLATFORM,payload: value }}


