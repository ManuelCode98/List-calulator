

export const loadTotalPriceLineThrough = ()=>{ 

    const getTotalPriceLocal = JSON.parse( localStorage.getItem( 4 ) );

    // Seleciona todas las clases con ese nombre y las mete en un array
    const selectDivTotalPrice = document.querySelectorAll('.info__total-price');


    for (let i = 0; i < getTotalPriceLocal.length; i++) {

        //Recorro las clases y cambio los valores de el precio total de cada producto
        selectDivTotalPrice[i].innerHTML = getTotalPriceLocal[i];
    
    };
};