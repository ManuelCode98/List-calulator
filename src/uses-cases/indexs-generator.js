import { getProductsArray } from "../../main";
import { inputsSaves, loadInputSavesReload, priceSaves } from "./create-product";
import { emptyArrayIndexsUndefined } from "./empty-array-element-undefined";
import { generatorIds, LoadStaticIds } from "./generator-ids";
import { arrIndexUnderlineNoRepeat } from "./index-underline-no-repeat";
import { saveProductsLocal } from "./save-products-local";
import { totalPriceSaveLocal } from "./total-price-save-local";

export let indexs = [ ];
export let index = 0; 

export const removeIndexsUnderlined = ()=>{  

    //Cargo el array de indices con lo que esta en el local storage
    const load = JSON.parse( localStorage.getItem( 1 ) );
    indexs = load;

    for (let i = 0; i < arrIndexUnderlineNoRepeat.length; i++) {
    
        indexs.splice( arrIndexUnderlineNoRepeat[i], 1, 'undefined' );

        // Le paso al array con algunos valores "undefined" para que los vacie y me retorne un nuevo array 
        indexs = emptyArrayIndexsUndefined( indexs );

        // Ahora guardamos todos los indices que no fueron eliminados
        const saveIndexsNoDelete = localStorage.setItem( 1, JSON.stringify( indexs) );

    //     console.log('removeIndexsUnderlined');
    // console.log(indexs);
    // console.log(arrIndexUnderlineNoRepeat);
    
    };

    

};
      

export const saveIndexsLocal = ( pIndexs )=>{ 
    
    const saveIndexs = localStorage.setItem(1, JSON.stringify( pIndexs ) );

};

export const loadIndexLocal = ()=>{ 

    if( indexs.length === 0 ){

        const getIndexs = JSON.parse( localStorage.getItem( 1 ) );

        
        for (let i = 1; i < getIndexs.length + 1; i++) {

            indexs.push( i );
 
            // Creadmo esta variable para crear un nueva instancia y que me devuelva un array sin numeros repetidos
            // const uniqueIndexValue = new Set(indexs);


console.log(`valueGuardado: ${indexs}`);

            // // Operador spread para recorrer la nueva instancia del array  
            // saveIndexsLocal( [...uniqueIndexValue - 1 ] );

            // console.log('unique value');
            
        }

        // LoadStaticIds();

        // loadInputSavesReload( getProductsArray );

        
        // totalPriceSaveLocal( 4, priceSaves );

    }


 };

export const indexsGenerator = ()=>{ 

    if ( localStorage.length === 0){

        indexs.push( inputsSaves.length );

        saveIndexsLocal( indexs );

        generatorIds( 2 );

        saveProductsLocal( 3 );

            
        totalPriceSaveLocal( 4, priceSaves );


    } else if(localStorage.length > 1 ) { 

        // const getProducts = JSON.parse( localStorage.getItem( 2 ) );

        const getIndexs = JSON.parse( localStorage.getItem( 1 ) );

        
        for (let i = 1; i < getIndexs.length + 2; i++) {

            indexs.push( i );

            // Creadmo esta variable para crear un nueva instancia y que me devuelva un array sin numeros repetidos
            const uniqueIndexValue = new Set(indexs);

            console.log(`uniqueValue ${ [...uniqueIndexValue] }`);

            // Operador spread para recorrer la nueva instancia del array  
            saveIndexsLocal( [...uniqueIndexValue] );
            
        }

        generatorIds( 2 )

        saveProductsLocal( 3 );

        
        totalPriceSaveLocal( 4, priceSaves );

    }

    
 };
