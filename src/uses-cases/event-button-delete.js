import { loadProductDom } from "./create-product-dom";
import { removeItemLocal } from "./remove-products-local";
import { saveClassLineThrough } from "./save-class-line-through";



const selectButtonDelete = document.querySelector('.btns__btn-delete--1');
const selectButtonDeleteAll = document.querySelector('.btns__btn-delete--2');

export const eventButtonDelete = ()=>{ 

    

    selectButtonDelete.addEventListener( 'click', ( event ) => {

        // console.error('Button delete no implementado');

        removeItemLocal();
    
        
    
    });

    selectButtonDeleteAll.addEventListener( 'click', (event) => {


        buttonDeleteAll();

    } );



};

const buttonDeleteAll = ()=>{ 

    localStorage.clear();

    window.location.reload();
    

 };

