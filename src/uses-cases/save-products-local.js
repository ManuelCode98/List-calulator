import { getProductsArray } from "../../main";
import { inputsSaves, inputsSavesLocal, loadInputSaves } from "./create-product";

// export let getProductsArray;

export const saveProducts = (pInputsSaves)=>{ 

    // const saveProducts = localStorage.setItem(2, JSON.stringify( inputsSaves ) );  
    localStorage.setItem(3, JSON.stringify( pInputsSaves ) );  

    // console.log(pInputsSaves);
 };

export const saveProductsLocal = (index)=>{ 


     if( inputsSaves.length && getProductsArray === null) {
        const getProducts = JSON.parse(localStorage.getItem( 3 ) );

        const saveProducts = localStorage.setItem(3, JSON.stringify( inputsSaves ) );

        
        // console.log('saveProducts If...');
    } else if ( getProductsArray.length && inputsSaves.length <= 1 ){

        // console.log(getProductsArray);

        loadInputSaves( getProductsArray );

        // const saveProducts = localStorage.setItem(2, JSON.stringify( inputsSaves ) ); 
        

        // console.log('saveProducts Else If...');

    } else if( getProductsArray.length && inputsSaves.length >= 2 ){

        const saveProducts = localStorage.setItem(3, JSON.stringify( inputsSaves ) );

        // console.log('Tercer Else If');

    }
    

    

 };