import { arrIdsUpdate, emptyArrayIdsUndefined } from "./empty-array-element-undefined";
import { arrIndexUnderlineNoRepeat } from "./index-underline-no-repeat";

export let ids = [ ];
export let id = ' ';

// Borra los ids que estan tachados
export const removeIdsUnderlined = ()=>{ 

    for (let i = 0; i < arrIndexUnderlineNoRepeat.length; i++) {
    
        ids.splice( arrIndexUnderlineNoRepeat[i], 1, 'undefined' );
            
    };

    // Le paso al array con algunos valores "undefined" para que los vacie y me retorne un nuevo array 
    emptyArrayIdsUndefined( ids );
    ids = arrIdsUpdate;

    // Ahora guardamos todos los Ids que no fueron eliminados
    localStorage.setItem( 2, JSON.stringify( ids ) );

};


// Carga los ids que estan en el local storage 
export const LoadStaticIds = ()=>{ 

    const loadIdsLocal = JSON.parse( localStorage.getItem( 2 ) );
    ids = loadIdsLocal;

};


/**
 * 
 * @param {number} clave Espera el numero que sera la clave para guardar el id en el local storage en forma de array 
 */
export const generatorIds = (clave)=>{ 

    // Agrega un id aleatorio en el array ids
    ids.push( Date.now().toString( 30 ) );

    // Agrega el id actual en la variable 
    id = (Date.now().toString( 30 ) );

    // Consigue el array string de ids del local storage y lo parcea a un array que se pueda utilizar
    const getIdsArray = JSON.parse( localStorage.getItem( clave ) );


    /**
     * 
     * @param {number} clave Espera el numero que sera la clave para guardar el id en el local storage en forma de array
     * @param {Array} array Espera el array de los ids del local storage 
     */
    const loadIds = (clave, array)=>{ 

        localStorage.setItem(clave, JSON.stringify( array ) );

    };


    if( getIdsArray === null && ids.length >= 1 ){

        localStorage.setItem(clave, JSON.stringify( ids ) );

    }else if( getIdsArray.length ){

        ids = getIdsArray;

        ids.push(id);

        loadIds(clave, ids);

    }

};


