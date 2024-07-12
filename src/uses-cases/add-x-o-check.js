
/**
 * 
 * @param { HTMLElement } selectDivProducts 
 */
export const addX = ( selectDivProducts )=>{ 

    // Busca el "div" ancestro mas cercano
    const selectAncestroText = selectDivProducts.closest('div');
    // Selecciona la etiqueta "i" para poder agregar y quitar clases
    const selectIcon = selectAncestroText.querySelector('i');


    //Le borrar las clase de check
    selectIcon.classList.remove('span-product__icon--green');
    selectIcon.classList.remove('fa-solid');
    selectIcon.classList.remove('fa-check');

    // Le pone una clase que tiene un tachado y le agrega una X
    selectIcon.classList.add('span-product__icon--red');
    selectIcon.classList.add('fa-solid');
    selectIcon.classList.add('fa-xmark');

};


/**
 * 
 * @param { HTMLElement } selectDivProducts 
 */
export const addCheck = ( selectDivProducts )=>{ 

    // Busca el "div" ancestro mas cercano
    const selectAncestroText = selectDivProducts.closest('div');
    // Selecciona la etiqueta "i" para poder agregar y quitar clases
    const selectIcon = selectAncestroText.querySelector('i');


    //Le borrar las clase de X
    selectIcon.classList.remove('span-product__icon--red');
    selectIcon.classList.remove('fa-solid'); 
    selectIcon.classList.remove('fa-xmark');

    // Le pone una clase que no tiene tachado
    selectIcon.classList.add('span-product__icon--green');
    selectIcon.classList.add('fa-solid');
    selectIcon.classList.add('fa-check');

};