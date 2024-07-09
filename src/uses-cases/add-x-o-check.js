


export const addX = ( selectDivProducts )=>{ 

    const selectAncestroText = selectDivProducts.closest('div');
    const selectAncestroIcon = selectAncestroText.querySelector('i');


    //Le borrar las clase de check
    selectAncestroIcon.classList.remove('span-product__icon--green');
    selectAncestroIcon.classList.remove('fa-solid');
    selectAncestroIcon.classList.remove('fa-check');

    // Le pone una clase que tiene un tachado y le agrega una X
    selectAncestroIcon.classList.add('span-product__icon--red');
    selectAncestroIcon.classList.add('fa-solid');
    selectAncestroIcon.classList.add('fa-xmark');



};

export const addCheck = ( selectDivProducts )=>{ 

    const selectAncestroText = selectDivProducts.closest('div');
    const selectAncestroIcon = selectAncestroText.querySelector('i');

    selectAncestroIcon.classList.remove('span-product__icon--red');
    selectAncestroIcon.classList.remove('fa-solid'); 
    selectAncestroIcon.classList.remove('fa-xmark');

    selectAncestroIcon.classList.add('span-product__icon--green');
    selectAncestroIcon.classList.add('fa-solid');
    selectAncestroIcon.classList.add('fa-check');


 };