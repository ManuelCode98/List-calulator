// import { CreateLocalStorage, checkProductArray } from './src/uses-cases/create-local-storage';
import { LoadStaticTotalPrice, createProduct, loadStaticInputSaves } from './src/uses-cases/create-product';
import { createProductDom, loadProductDom } from './src/uses-cases/create-product-dom';
import { eventButtonDelete } from './src/uses-cases/event-button-delete';
import { eventClick, loadClickIndexFound } from './src/uses-cases/event-click';
import { LoadStaticIds, ids, removeIdsUnderlined } from './src/uses-cases/generator-ids';
import { indexUnderlineNoRepeat } from './src/uses-cases/index-underline-no-repeat';
import { saveClassLineThrough, searchIndexLineThrough } from './src/uses-cases/save-class-line-through';
import './style.css';
      


// indexUnderlineNoRepeat();

searchIndexLineThrough();

// removeIdsUnderlined(); 

eventClick();

eventButtonDelete();

console.log('Main');



export const getProductsArray = JSON.parse( localStorage.getItem( 3 ) );


  if(localStorage.length >= 1 ){

    // Solo carga el array de los productos que estan en el local storage
    loadStaticInputSaves();

    // Solo carga el array del resultado de los precios de cada producto * la cantida de productos que estan en el local storage
    LoadStaticTotalPrice();

    // Solo carga el array de los ids que estan en el local storage
    LoadStaticIds();
    
    loadProductDom();
  
    console.log('main if');
  
  }




// todo arreglar condicion para que entre a consultar el local storage o no

// checkProductArray();

// console.log(JSON.parse( localStorage.getItem( 2 ) ).length);

document.querySelector('.inputs__add').addEventListener('click', (event)=>{

  createProduct();

  console.log('preess');

  // No permite recargar la pagina al precionar el botton
  event.preventDefault();

} )


document.querySelector('.app').addEventListener('keydown', (event) => {
  

  if(event.key === 'Enter'){

    // saveClassLineThrough();

   createProduct();
   
  //  createProductDom();
   
   console.log('main event');
  //  CreateLocalStorage();
   
  }

});




