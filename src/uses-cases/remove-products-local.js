import { clearAllLocalStorage } from "./clear-all-local-storage";
import { removePricesUnderlined, removeProductUnderlined } from "./create-product";
import { loadProductDom } from "./create-product-dom";
import { removeIdsUnderlined } from "./generator-ids";
import { indexUnderlineNoRepeat } from "./index-underline-no-repeat";
import { removeIndexsUnderlined } from "./indexs-generator";
import { emptyIndexFound } from "./save-class-line-through";


// Borra y actualiza todos los valores de los elementos del local storage  
export const removeItemLocal = ()=>{ 

    indexUnderlineNoRepeat();

    removeIndexsUnderlined();

    removeIdsUnderlined();

    removeProductUnderlined();

    removePricesUnderlined();

    
    // Al borrar los elementos de DOM esta funcion vacia el array de indexFound que se encarga de tachar los elementos que tiene el valor de cero
    emptyIndexFound();

    //Luego que ya actualizamos todos los arrays con los elementos que no fueron borrados, llamamos la funcion que recargar los elementos del DOM
    loadProductDom();
    

    // Si el localStorage tiene claves vacias, borrar todo el localStorage
    clearAllLocalStorage();  


    window.location.reload();
    
};