import { getProductsArray } from "../../main";
import { inputsSaves, loadInputSaves } from "./create-product";


// Guarda el los productos en el local storage
export const saveProducts = (pInputsSaves)=>{ 

    localStorage.setItem(3, JSON.stringify( pInputsSaves ) );  

};

// Guarda los productos en el local storage
export const saveProductsLocal = ( clave ) => { 

    if( inputsSaves.length && getProductsArray === null) {

        JSON.parse(localStorage.getItem( clave ) );

        localStorage.setItem(clave, JSON.stringify( inputsSaves ) );


    } else if ( getProductsArray.length && inputsSaves.length <= 1 ){

        // Carga todos los productos en la variable virtual
        loadInputSaves( getProductsArray );

    } else if( getProductsArray.length && inputsSaves.length >= 2 ){

        localStorage.setItem(clave, JSON.stringify( inputsSaves ) );

    }
    

    

 };