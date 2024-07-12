import { loadTotalPrice, priceSaves } from "./create-product";


// Guarda el total de los precios de cada producto
export const totalPriceSaveLocal = ( clave, totalPriceArr )=>{ 


    const getPriceSaves = JSON.parse( localStorage.getItem( 4 ) );

    if ( priceSaves.length <= 1 && getPriceSaves === null || priceSaves.length > 1 && getPriceSaves != null ){


        const totalPriceSave = localStorage.setItem( clave, JSON.stringify( totalPriceArr, 0 ) ); 


    }else if( priceSaves.length <= 1 && getPriceSaves.length ){

        // Carga los precios en la variable virtual
        loadTotalPrice( totalPriceArr );


    };
 
};


 