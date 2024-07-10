import { containerInfo, infoResultTotal, inputsSaves } from "./create-product";
import { saveClassLineThrough, searchIndexLineThrough } from "./save-class-line-through";

export const showTotalPrice = ()=>{
    
    const getTotalPrice = JSON.parse(localStorage.getItem( 4 ) );

    const initialValue = 0;
    const showTotalPriceDom = getTotalPrice.reduce( ( acumulador, actualPrice ) => acumulador + actualPrice, initialValue );

    infoResultTotal.innerText = showTotalPriceDom;
 };


export const loadProductDom = async()=>{

// Asi limpio el html para cargar los productos de abajo y que no se dupliquen
    containerInfo.innerHTML = '';

    const getIndexs = JSON.parse(localStorage.getItem( 1 ) );
    const getIds = JSON.parse(localStorage.getItem( 2 ) );
    const getProduct = JSON.parse(localStorage.getItem( 3 ) );
    const getTotalPrice = JSON.parse(localStorage.getItem( 4 ) );

    
    

    // const infoResultTotal  = document.querySelector('.info_result__total');

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

    console.log('loadProductDom');
    console.log(getIds);

 };  


export const createProductDom = ()=>{ 

    // Asi limpio el html para cargar los productos de abajo y que no se dupliquen
    containerInfo.innerHTML = '';

    const getIndexs     = JSON.parse( localStorage.getItem( 1 ) );
    const getIds        = JSON.parse( localStorage.getItem( 2 ) );
    const getProduct    = JSON.parse( localStorage.getItem( 3 ) );
    const getTotalPrice = JSON.parse( localStorage.getItem( 4 ) );


    // const initialValue = 0;
    // const showTotalPrice = getTotalPrice.reduce( ( acumulador, actualPrice ) => acumulador + actualPrice, initialValue );


    // const infoResultTotal  = document.querySelector('.info_result__total');

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
    
    console.log('create Dom');
    

 };