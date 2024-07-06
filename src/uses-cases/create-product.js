import { createProductDom, loadProductDom } from "./create-product-dom";
import { emptyArrayPricesUndefined, emptyArrayProductUndefined } from "./empty-array-element-undefined";
import { generatorIds, id, ids } from "./generator-ids";
import { arrIndexUnderlineNoRepeat, indexUnderlineNoRepeat } from "./index-underline-no-repeat";
import { index, indexs, indexsGenerator, } from "./indexs-generator";
import { saveClassLineThrough, searchIndexLineThrough } from "./save-class-line-through";
import { saveProducts, saveProductsLocal } from "./save-products-local";



const form         = document.querySelector('.container__form');
const inputProduct = document.querySelector('#product');
const inputPrice   = document.querySelector('#price');
const inputAmount  = document.querySelector('#amount');

// variables exportadas
export const containerInfo    = document.querySelector('.container__info');
export const infoResultTitle  = document.querySelector('.info_result__title');
export const infoResultTotal  = document.querySelector('.info_result__total');

export let inputsSaves    = [];

// Borrar del array los elementos tachados
export const removeProductUnderlined = ()=>{  

  // console.log(inputsSaves.length);

  for (let i = 0; i < arrIndexUnderlineNoRepeat.length; i++) {
    
    inputsSaves.splice( arrIndexUnderlineNoRepeat[i], 1, 'undefined' );

    // Le paso al array con algunos valores "undefined" para que los vacie y me retorne un nuevo array 
    // console.log( inputsSaves = emptyArrayProductUndefined( inputsSaves ) );
    inputsSaves = emptyArrayProductUndefined( inputsSaves );

    // Ahora guardamos todos los productos que no fueron eliminados
    const saveProductsNoDelete = localStorage.setItem( 3, JSON.stringify( inputsSaves ) );
  }

 };

// Carga el inputSaves con el localStorage guardado para que el archivo main lo puede leer tan solo al cargar la pagina 
export const loadStaticInputSaves = ()=>{ 

    const getInputSavesLocal = JSON.parse(localStorage.getItem( 3 ) );

    inputsSaves = getInputSavesLocal;

    // console.log(inputsSaves);

 };

export const loadInputSaves = ( getProductsArray )=>{ 

  inputsSaves = getProductsArray;

  const productValue = inputProduct.value;
  const priceValue   = inputPrice.value;
  const amountValue  = inputAmount.value;

  inputsSaves.push( [ productValue ,[ priceValue, 0 ], amountValue, 0 ]  );

  saveProducts(inputsSaves) 

  
 };

export let inputsSavesLocal = [];

// export let amountSave     = [];
export let priceSaves     = []; 
///////////////////////////////////////////////////
export const removePricesUnderlined = ()=>{ 

  //Todo revisar que todo este marchando bien

for (let i = 0; i < arrIndexUnderlineNoRepeat.length; i++) {
  
  priceSaves.splice( arrIndexUnderlineNoRepeat[i], 1, 'undefined' );

  // Le paso al array con algunos valores "undefined" para que los vacie y me retorne un nuevo array 
  // console.log( priceSaves = emptyArrayPricesUndefined( priceSaves ) );

  priceSaves = emptyArrayPricesUndefined( priceSaves );

  // Ahora guardamos todos los prices que no fueron eliminados
  localStorage.setItem( 4, JSON.stringify( priceSaves ) );

  
}
/////////////////////////////////////////

};

export const LoadStaticTotalPrice = ()=>{ 

  const getPriceSaves = JSON.parse( localStorage.getItem( 4 ) );

  priceSaves = getPriceSaves;

  // console.log(priceSaves);

 };

export const loadTotalPrice = ( totalPriceArr )=>{ 

  const getPriceSaves = JSON.parse( localStorage.getItem( 4 ) );


  priceSaves = getPriceSaves;

  priceSaves.push( totalPriceArr[0] )
  

  const totalPriceSave = localStorage.setItem( 4, JSON.stringify( priceSaves ) ); 

  console.log('Load Total price EJECUTADO...');

};

export let sumaTotalPrice = 0;

export const createProduct = ()=>{ 


  const productValue = inputProduct.value;
  const priceValue   = inputPrice.value;
  const amountValue  = inputAmount.value;

  

  if(productValue && priceValue && amountValue){

    

    // totalPrice multiplica el valor del producto por la cantidad de productos que se ingresen
    let totalPrice = priceValue * amountValue;

    
    // indexsGeneratorArray es una funciona que me genera un numero por cada articulo creado, que a su vez lo uso como indice para localizar su costo unitario 
    // indexsGeneratorArray();
    
    // Me guarda los valores del input para luego ponerlos en el html
    inputsSaves.push( [ productValue, [ priceValue, 0 ], amountValue, 0 ]  );


     // Guarda los precios de cada producto
    priceSaves.push( totalPrice );

    console.log( priceSaves )

//Todo Viendo si llamando la funcion arreglo el problema de que no sume todos los valores si hay elementos tachados
// saveClassLineThrough();
// LoadStaticTotalPrice();

     // console.log(priceSaves);

     indexsGenerator();


     form.reset();  
    
    // Llamo a esta funcion para que me busque los indices tachados y los guarde en el array indexsFound
     searchIndexLineThrough();

    // Llamo a esta funcion para que le ponga la clace de tachado a los indices que tienen el valor en 0
     saveClassLineThrough();

    // Crea cada producto en el DOM
     createProductDom(); 

    
      
    
  };
                

};

export const loadItemsRemove = ()=>{ 

  // inputsSaves = 

};
