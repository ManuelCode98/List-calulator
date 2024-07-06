import { clearAllLocalStorage } from "./clear-all-local-storage";
import { removePricesUnderlined, removeProductUnderlined } from "./create-product";
import { loadProductDom } from "./create-product-dom";
import { clickIndexFound, loadClickIndexFound } from "./event-click";
import { removeIdsUnderlined } from "./generator-ids";
import { indexUnderlineNoRepeat } from "./index-underline-no-repeat";
import { removeIndexsUnderlined } from "./indexs-generator";
import { emptyIndexFound, indexsFound, saveClassLineThrough,  } from "./save-class-line-through";
import { totalPriceSaveLocal } from "./total-price-save-local";


export const removeItemLocal = async()=>{ 


    indexUnderlineNoRepeat();

    removeIndexsUnderlined();
    removeIdsUnderlined();
    removeProductUnderlined();
    removePricesUnderlined();
    

    // Al borrar los elementos de DOM esta funcion vacia el array de indexFound que se encarga de tachar los elementos que tiene el valor de cero
    //Todo lo comente para no vacie el array de los indices tachados arreglar error
    emptyIndexFound();

    //Luego que ya actualizamos todos los arrays con los elementos que no fueron borrados, llamamos la funcion que recargar los elementos del DOM
    loadProductDom();

    // Si el localStorage tiene claves vacias, borrar todo el localStorage
    clearAllLocalStorage();

    // indexUnderlineNoRepeat();
    

    
};