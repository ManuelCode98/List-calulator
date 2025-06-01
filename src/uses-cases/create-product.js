import { createProductDom } from "./create-product-dom";
import { arrPricesUpdate, arrProductUpdate, emptyArrayPricesUndefined, emptyArrayProductUndefined } from "./empty-array-element-undefined";
import { arrIndexUnderlineNoRepeat } from "./index-underline-no-repeat";
import { indexsGenerator } from "./indexs-generator";
import { saveClassLineThrough, searchIndexLineThrough } from "./save-class-line-through";
import { saveProducts } from "./save-products-local";



const form         = document.querySelector('.container__form');
// const inputProduct = document.querySelector('#product');
const inputPrice   = document.querySelector('#price');
// const inputAmount  = document.querySelector('#amount');

// variables exportadas
export const containerInfo    = document.querySelector('.container__info');
export const infoResultTitle  = document.querySelector('.info_result__title');
export const infoResultTotal  = document.querySelector('.info_result__total');

// Variable que esta vacia lista para que su contenido sea cambiado
export let inputsSaves = [ ];


// Borrar del array los elementos tachados
export const removeProductUnderlined = ()=>{  

  for ( let i = 0; i < arrIndexUnderlineNoRepeat.length; i++ ) {
    
    inputsSaves.splice( arrIndexUnderlineNoRepeat[i], 1, 'undefined' );

    
  };


  // Le paso al array con algunos valores "undefined" para que los vacie y me retorne un nuevo array 
  emptyArrayProductUndefined( inputsSaves ); //revisado
  inputsSaves = arrProductUpdate;

  // Ahora guardamos todos los productos que no fueron eliminados en el local storage
  const saveProductsNoDelete = localStorage.setItem( 3, JSON.stringify( inputsSaves ) );

};


// Carga el inputSaves con el localStorage guardado para que el archivo main lo puede leer tan solo al cargar la pagina 
export const loadStaticInputSaves = ()=>{ 

  const getInputSavesLocal = JSON.parse( localStorage.getItem( 3 ) );
  inputsSaves = getInputSavesLocal;

};

/**
 * 
 * @param { Array } getProductsArray 
 */
export const loadInputSaves = ( getProductsArray )=>{ // revisado

  // Guardamos todos los productos que estan en el local storage en la variable
  inputsSaves = getProductsArray;

  // const productValue = inputProduct.value;
  const priceValue   = inputPrice.value;
  // const amountValue  = inputAmount.value;

  inputsSaves.push( [ productValue ,[ priceValue, 0 ] ]  );

  saveProducts( inputsSaves );  
};


/**
 * 
 * @param { Array } getProductsArray 
 */
export const loadInputSavesReload = ( getProductsArray )=>{ 

  inputsSaves = getProductsArray;

};

// Variable lista para ser cargada con el total de cada producto
export let priceSaves = []; 

// Variable lista para ser cargada con la hora de cada venta
export let timeSaves = [];

// Consigue la hora del local storage y carga la variable timeSaves
export const loadTimeLocal = ()=>{ // revisado

  timeSaves = JSON.parse( localStorage.getItem( 5 ) );


};



// Cambia los precios de los productos tachados a undefined para que despues se filtren y solo queden los precios no tachados 
export const removePricesUnderlined = ()=>{ // revisado


  for ( let i = 0; i < arrIndexUnderlineNoRepeat.length; i++ ) {
  
  priceSaves.splice( arrIndexUnderlineNoRepeat[i], 1, 'undefined' );
  
  };

  // Le paso el array con algunos valores "undefined" para que los vacie y me retorne un nuevo array 
  emptyArrayPricesUndefined( priceSaves ); // revisado

  priceSaves = arrPricesUpdate;

  // Ahora guardamos todos los prices que no fueron eliminados
  localStorage.setItem( 4, JSON.stringify( priceSaves ) );

};


export const LoadStaticTotalPrice = ()=>{ 

  const getPriceSaves = JSON.parse( localStorage.getItem( 4 ) );

  priceSaves = getPriceSaves;

};

/**
 * 
 * @param { Array } totalPriceArr 
 */
export const loadTotalPrice = ( clave, totalPriceArr )=>{ // revisado

  const getPriceSaves = JSON.parse( localStorage.getItem( clave ) );

  priceSaves = getPriceSaves;

  priceSaves.push( totalPriceArr[0] )
  
  localStorage.setItem( clave, JSON.stringify( priceSaves ) ); 

};


export let sumaTotalPrice = 0;


// Recibe todos los valores de los inputs para despues ser guardados en el local storage
export const createProduct = ()=>{ // revisado

  const productValue = 'Gasto';
  const priceValue   = inputPrice.value;
  // const amountValue  = inputAmount.value;

  // Conseguir la hora
  const hour = new Date().getHours();
  const minutes = new Date().getMinutes();
  const seconds = new Date().getSeconds();

  
  if( priceValue ){


    // totalPrice multiplica el valor del producto por la cantidad de productos que se ingresen
    // let totalPrice = priceValue * amountValue;
     let totalPrice = priceValue;

    // totalTime guarda los tiempos de cada venta
    let totalTime = [ hour, minutes, seconds ];
    
    // Me guarda los valores del input para luego ponerlos en el html
    // inputsSaves.push( [ productValue, [ priceValue, 0 ], amountValue, 0 ]  );
    inputsSaves.push( [ productValue, [ priceValue, 0 ] ]  );
    

    // Guarda los precios de cada producto
    priceSaves.push( totalPrice );

    // Guarda la hora en la que se hizo cada venta
    timeSaves.push( totalTime );

    // Funcion que genera indices
    indexsGenerator(); // revisado

    // Guarda la hora de cada venta en el local storage
    localStorage.setItem( 5, JSON.stringify( timeSaves ) );

    form.reset();  
    
    // Llamo a esta funcion para que me busque los indices tachados y los guarde en el array indexsFound
    searchIndexLineThrough(); // revisado

    // Llamo a esta funcion para que le ponga la clace de tachado a los indices que tienen el valor en 0
    saveClassLineThrough(); // revisado

    // Crea cada producto en el DOM
    createProductDom(); 

  };
                
};
