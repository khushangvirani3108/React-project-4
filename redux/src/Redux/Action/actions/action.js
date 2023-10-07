export const ADD =(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
} 
export const DEL =(id)=>{
    return{
        type:"DEL_CART",
        payload:id
    }
} 
export const DELONE =(item)=>{
    return{
        type:"DEL_ONE",
        payload:item
    }
} 