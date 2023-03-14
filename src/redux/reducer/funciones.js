export function compareAZ(a,b){

    if(a.name.toLowerCase() < b.name.toLowerCase()){
        return -1
    }else if(a.name.toLowerCase()> b.name.toLowerCase()){
        return +1
    }else{
        return 0
    }

}

export function compareZA(a,b){
    if(a.name.toLowerCase() < b.name.toLowerCase()){
        return +1
    }else if(a.name.toLowerCase()> b.name.toLowerCase()){
        return -1
    }else{
        return 0
    }
}
export function compareRating(a,b){
    if(a.rating < b.rating){
        return +1
    }else if(a.rating>b.rating){
        return -1
    }else{
        return 0
    }

}

export function compareID(a,b){
    if(a.id < b.id){
        return -1
    }else if(a.id> b.id){
        return +1
    }else{
        return 0
    }

}