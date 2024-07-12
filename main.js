// import { CreateLocalStorage, checkProductArray } from './src/uses-cases/create-local-storage';
import { LoadStaticTotalPrice, createProduct, loadStaticInputSaves } from './src/uses-cases/create-product';
import { loadProductDom } from './src/uses-cases/create-product-dom';
import { eventButtonDelete } from './src/uses-cases/event-button-delete';
import { eventClick } from './src/uses-cases/event-click';
import { LoadStaticIds } from './src/uses-cases/generator-ids';
import { loadIndexLocal } from './src/uses-cases/indexs-generator';
import { searchIndexLineThrough } from './src/uses-cases/save-class-line-through';
import './style.css';

// searchIndexLineThrough();

eventClick();

eventButtonDelete();

export const getProductsArray = JSON.parse( localStorage.getItem( 3 ) );


if(localStorage.length >= 1 ){

  // Carga los indice en la variable virtual al recargar la pagina, esto hace que nos pueda borre los elementos tachados si asi lo queremos
  loadIndexLocal();

  // Solo carga el array de los productos que estan en el local storage
  loadStaticInputSaves();

  // Solo carga el array del resultado de los precios de cada producto * la cantida de productos que estan en el local storage
  LoadStaticTotalPrice();

  // Solo carga el array de los ids que estan en el local storage
  LoadStaticIds();

  // Busca el indice de los productos que estan tachados
  searchIndexLineThrough();

  // Carga los productos en el DOM al recargar el navegador
  loadProductDom();
  
};

// Evento del boton de agregar productos
document.querySelector('.inputs__add').addEventListener('click', (event)=>{

  createProduct();
  
  // No permite recargar la pagina al precionar el botton
  event.preventDefault();

} );


// Evento de la tecla "Enter" para agregar productos
document.querySelector('.app').addEventListener('keydown', (event) => {
  
  if(event.key === 'Enter') createProduct();
  
} );
