import { addCheck, addX } from "./add-x-o-check";
import { LoadStaticTotalPrice, containerInfo, infoResultTotal, inputsSaves, priceSaves, sumaTotalPrice } from "./create-product";
import { loadProductDom, showTotalPrice } from "./create-product-dom";
import { emptyArrayProductUndefined } from "./empty-array-element-undefined";
import { ids } from "./generator-ids";
import { loadTotalPriceLineThrough } from "./load-total-price-line-through";
import { indexsFound } from "./save-class-line-through";

export let clickIndexFound = [];
const selectProductDOM = document.querySelector('.info__product');

export const loadClickIndexFound = ()=>{ 

    //Todo no esta llamada en ninguna parte
 
    clickIndexFound = indexsFound;

    console.log(clickIndexFound);

};

export const eventClick = (element)=>{ 

    
            console.log('click');
        containerInfo.addEventListener('click', (event)=>{
            // selectProductDOM.addEventListener('click', (event)=>{

        // Solo permite que el evento click funcione al precionar el nombre del producto        
           if( event.target.id ){

            const idsProduct = event.target.id;

            const indexElementSelect = ids.indexOf(idsProduct);

            // console.log(ids);
            
            // console.log(indexElementSelect);

            // Selecciona un elemento del DOM por el ID
            const selectDivProducts = document.getElementById(`${event.target.id}`);
            

            // El "closest('Selector')" sirve para seleccionar el ancestro mas cercano del elemento html que se le pase
            const selectAncestroText = selectDivProducts.closest('div');
            

            if( idsProduct ){

                // Consigue los precios del localStorage
                let getPriceSavesLocal = JSON.parse(localStorage.getItem( 4 ) );

                if( selectAncestroText.className === 'info__span-product' ){

                    //Agrega una X al tacharlo y le paso el div seleccionado como parametro
                    addX( selectDivProducts );

                    selectAncestroText.classList.add('line-through');

                    //Guardo el indice del producto tachado por su ID
                    clickIndexFound.push(indexElementSelect);

                    // console.log(clickIndexFound);



                    // splice seleccona un elemento por su indice, se seleciona el numero apartir de cuantos se quieren cambiar y se le pasa el valor a cambiar
                    getPriceSavesLocal.splice(indexElementSelect, 1 , inputsSaves[indexElementSelect][1][1] );
                    //Cambia el valor del precio guardado en la ejecucion para que no sea tomado en cuenta si un producto esta tachado
                    priceSaves.splice(indexElementSelect, 1 , inputsSaves[indexElementSelect][1][1] );

                    // console.log(getPriceSavesLocal);

                    //Guarda el inputSaves con el precio cambiado 
                    let setPriceChange = localStorage.setItem( 4, JSON.stringify( getPriceSavesLocal ) );

                    showTotalPrice();

                    
                } else if( selectAncestroText.className === 'info__span-product line-through' ){
        
                    const saveTotalPrice  = inputsSaves[indexElementSelect][1][0];
                    const saveTotalAmount = inputsSaves[indexElementSelect][2];

    ///////////////////////////////////////////////////////

    // Ya se encontro como sustituir cada indice que no tiene tachado ahora falta mantenerlo guardado
                    // Encuentra el indice del elemento que ya no esta tachado
                    const findIndex = clickIndexFound.indexOf(indexElementSelect);

                    // Agarra el indice que ya no esta tachado y lo pone a undefined
                    clickIndexFound.splice(findIndex, 1, 'undefined');

                    // Filtra a los indices que su valor fue cambiado a undefined y sacar un nuevo array sin ellos
                    clickIndexFound = clickIndexFound.filter( ( data ) => {

                        return data != 'undefined';
                    });
                    
                    //Todo Aca muetra el array de los indice que pertenecen a cada elemeto que estan tachado
                    // console.log(clickIndexFound);

                    //Quita todos los valores undefined del array clickIndexFound
                    // emptyArrayElementUndefined();

    ///////////////////////////////////

                    // splice seleccona un elemento por su indice, se seleciona el numero apartir de cuantos se quieren cambiar y se le pasa el valor a cambiar
                    const savePriceChangeLocal = getPriceSavesLocal.splice(indexElementSelect, 1 , parseInt( saveTotalPrice * saveTotalAmount ) );

                    const saveTotalPriceLocal  = localStorage.setItem( 4, JSON.stringify( getPriceSavesLocal ) );
                    
                    //Le borrar las clase de X, le pone la de la check y le paso el div seleccionado como parametro
                    addCheck( selectDivProducts );

                    // Le remueve una clase que tiene un tachado
                    selectAncestroText.classList.remove('line-through');

                   

                    loadTotalPriceLineThrough();

                    // selectDivProducts.innerText = savePriceChangeLocal;

                    showTotalPrice();
                                
                };        
            };



           }

        });       
};