import { addX } from "./add-x-o-check";
import { containerInfo } from "./create-product";
import { loadClickIndexFound } from "./event-click";


export let indexsFound = [];

export const emptyIndexFound = async()=>{ 

    // Vacio el indexFound despues de precionar el boton de borrar
    indexsFound = [ ];


 };


export const searchIndexLineThrough = ()=>{     

    const getIndexTotalPrice = JSON.parse( localStorage.getItem( 4 ) );

    const element = 0;

    if(getIndexTotalPrice != null ){

        if( getIndexTotalPrice.length ){

            let searchElement = getIndexTotalPrice.indexOf( element );


            while( searchElement != -1 ){
        
                indexsFound.push(searchElement);
        
                searchElement = getIndexTotalPrice.indexOf( element, searchElement + 1 );
        
            }
        
            

            console.log(indexsFound);

        
        }; 

    };

    loadClickIndexFound();

};

export const saveClassLineThrough = ()=>{ 

    const getIdsLocal = JSON.parse( localStorage.getItem( 2 ) );


    // const getPriceLocal = JSON.parse( localStorage.getItem( 4 ) );

    for (let i = 0; i < indexsFound.length; i++) {
        // for (let i = 0; i < getPriceLocal.length; i++) {

        const selectIdProduct = document.getElementById(getIdsLocal[indexsFound[i]]);
        
        const selectAncestroContainer = selectIdProduct.closest('div');
    
              selectAncestroContainer.classList.add('line-through');
              addX(selectIdProduct);

              
              
    };   

    loadClickIndexFound();

    // console.log( indexsFound );

 };