import { removeItemLocal } from "./remove-products-local";


const selectButtonDelete    = document.querySelector('.btns__btn-delete--1');
const selectButtonDeleteAll = document.querySelector('.btns__btn-delete--2');

// Funcion de los botones de borrar
export const eventButtonDelete = ()=>{ 

    selectButtonDelete.addEventListener( 'click', ( event ) => {

        removeItemLocal();

    } );

    selectButtonDeleteAll.addEventListener( 'click', (event) => {

        buttonDeleteAll();

    } );

};


// Borra el local storage y recarga la pagina
const buttonDeleteAll = ()=>{ 

    localStorage.clear();

    window.location.reload();
    
};

