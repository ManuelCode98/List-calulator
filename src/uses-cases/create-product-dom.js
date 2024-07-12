import { containerInfo, infoResultTotal } from "./create-product";
import { saveClassLineThrough } from "./save-class-line-through";


// Suma el precio de cada articulo y lo muestra en el DOM
export const showTotalPrice = () => {
    
    const getTotalPrice = JSON.parse(localStorage.getItem( 4 ) );

    const initialValue      = 0;
    const showTotalPriceDom = getTotalPrice.reduce( ( acumulador, actualPrice ) => acumulador + actualPrice, initialValue );

    infoResultTotal.innerText = showTotalPriceDom;
};


// Carga en el DOM todo lo que esta en el local storage si se recarga la pagina
export const loadProductDom = ()=>{

    // Asi limpio el html para cargar los productos de abajo y que no se dupliquen
    containerInfo.innerHTML = '';


    // Consigo todos los Item que estan en el local storage
    const getIndexs     = JSON.parse(localStorage.getItem( 1 ) );
    const getIds        = JSON.parse(localStorage.getItem( 2 ) );
    const getProduct    = JSON.parse(localStorage.getItem( 3 ) );
    const getTotalPrice = JSON.parse(localStorage.getItem( 4 ) );


    for (let i = 0; i < getIndexs.length; i++) {
        
        containerInfo.innerHTML += `
            <div class='info__span-product'>
            <i class="span-product__icon--green fa-solid fa-check"></i>
            <span id='${getIds[i]}' class='info__product'>${ getProduct[i][0] }</span> 
            <span class='info__price'>${ getProduct[i][1][0] }</span>
            <span class='info__amount'>${ getProduct[i][2] }</span>
            <span class='info__total-price'>${ getTotalPrice[i] }</span>  
            </div>`;
    
    };
         
    // Funcion que mantiene el tachado del producto asi recargen la pagina
    saveClassLineThrough();

    // Llama a la funcion que va a mostrar el precio total de todos los productos en el DOM
    showTotalPrice();
};  


// Carga en el DOM todo lo que esta en el local storage
export const createProductDom = ()=>{ 

    // Asi limpio el html para cargar los productos de abajo y que no se dupliquen
    containerInfo.innerHTML = '';

    // Consigo todos los Item que estan en el local storage
    const getIndexs     = JSON.parse( localStorage.getItem( 1 ) );
    const getIds        = JSON.parse( localStorage.getItem( 2 ) );
    const getProduct    = JSON.parse( localStorage.getItem( 3 ) );
    const getTotalPrice = JSON.parse( localStorage.getItem( 4 ) );


    for (let i = 0; i < getIndexs.length; i++) {
        
        containerInfo.innerHTML += `
            <div class='info__span-product'>
            <i class="span-product__icon--green fa-solid fa-check"></i>
            <span id='${getIds[i]}' class='info__product'>${ getProduct[i][0] }</span> 
            <span class='info__price'>${ getProduct[i][1][0] }</span>
            <span class='info__amount'>${ getProduct[i][2] }</span>
            <span class='info__total-price'>${ getTotalPrice[i] }</span>  
            </div>`;
    
    };
            
    // Funcion que mantiene el tachado del producto asi recargen la pagina
    saveClassLineThrough();

    // Llama a la funcion que va a mostrar el precio total de todos los productos en el DOM
    showTotalPrice();    
};