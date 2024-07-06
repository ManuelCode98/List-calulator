import { loadTotalPrice, priceSaves } from "./create-product";



export const totalPriceSaveLocal = ( clave, totalPriceArr )=>{ 

    // const totalPriceSave = localStorage.setItem( clave, JSON.stringify( totalPriceArr ) );

    const getPriceSaves = JSON.parse( localStorage.getItem( 4 ) );

    if (priceSaves.length <= 1 && getPriceSaves === null || priceSaves.length > 1 && getPriceSaves != null ){ //length

        // todo arreglar que se cargue el precio total y el 0 en una posicion del array
        // const totalPriceSave = localStorage.setItem( clave, JSON.stringify( totalPriceArr ) ); 
        const totalPriceSave = localStorage.setItem( clave, JSON.stringify( totalPriceArr, 0 ) ); 

        // console.log('Total price save local IF...');

    }else if( priceSaves.length <= 1 && getPriceSaves.length ){

        loadTotalPrice( totalPriceArr );

        // const totalPriceSave = localStorage.setItem( clave, JSON.stringify( totalPriceArr ) ); 

        

        // console.log('Total price save local IF ELSE...');

    }
    // else if( getPriceSaves.length  && priceSaves.length < 2 ){

        

    // }

};


 