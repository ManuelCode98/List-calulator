// Variables exportadas y listas para ser cargadas
export let arrayFilterIndexs  = [ ];
export let arrayFilterIds     = [ ];
export let arrayFilterProduct = [ ];
export let arrayFilterPrices  = [ ];


export let arrIndexsUpdate;

/**
 * Funcion que recibe un array con elementos "undefined" y los filtra y deja solo elementos que no estan "undefined"
 * @param { Array } emptyArr 
 */
export const emptyArrayIndexsUndefined = ( emptyArr ) => { 

  arrIndexsUpdate = emptyArr.filter( ( data ) => {

    return emptyArr = data != 'undefined';

  } ); 

};


export let arrIdsUpdate;

/**
 * Funcion que recibe un array con elementos "undefined" y los filtra y deja solo elementos que no estan "undefined"
 * @param { Array } emptyArr 
 */
export const emptyArrayIdsUndefined = ( emptyArr ) => { 

  arrIdsUpdate = emptyArr.filter( ( data ) => {

    return emptyArr = data != 'undefined';

  } );

};


export let arrProductUpdate;

/**
 * Funcion que recibe un array con elementos "undefined" y los filtra y deja solo elementos que no estan "undefined"
 * @param { Array } emptyArr 
 */
export const emptyArrayProductUndefined = ( emptyArr ) => { 

  arrProductUpdate =  emptyArr.filter( ( data ) => {

    return emptyArr = data != 'undefined';

  } );

};

export let arrPricesUpdate;

/**
 * Funcion que recibe un array con elementos "undefined" y los filtra y deja solo elementos que no estan "undefined"
 * @param { Array } emptyArr 
 */
export const emptyArrayPricesUndefined = ( emptyArr ) => { 

  arrPricesUpdate = emptyArr.filter( ( data ) => {

    return emptyArr = data != 'undefined';  

  } );

};