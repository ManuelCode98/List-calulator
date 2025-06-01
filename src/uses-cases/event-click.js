import { addCheck, addX } from "./add-x-o-check";
import { containerInfo, inputsSaves, priceSaves } from "./create-product";
import { showTotalPrice } from "./create-product-dom";
import { ids } from "./generator-ids";
import { loadTotalPriceLineThrough } from "./load-total-price-line-through";
import { indexsFound } from "./save-class-line-through";

// Guarda todos los indices de los elementos tachados
export let clickIndexFound = [];

// Carga todos los indices seleccionados en la variable para exportarla
export const loadClickIndexFound = ()=>{  // revisado
 
    clickIndexFound = indexsFound;

};

// Funcion que llama al evento click
export const eventClick = ( )=>{ 

    containerInfo.addEventListener('click', (event)=>{

    // Solo permite que el evento click funcione al precionar el nombre del producto        
    if( event.target.id ){

        // Muestra el id del producto clicado
        const idsProduct = event.target.id;

        // Consigue el indice del elemento clicado
        const indexElementSelect = ids.indexOf(idsProduct);

        // Selecciona un elemento del DOM por el ID
        const selectDivProducts = document.getElementById(`${event.target.id}`);
            
        // El "closest('Selector')" sirve para seleccionar el ancestro mas cercano del elemento html que se le pase
        const selectAncestroText = selectDivProducts.closest('div');
        

        // Solo pasa a la condicion si tiene un id seleccionado
        if( idsProduct ){

            // Consigue los precios del localStorage
            let getPriceSavesLocal = JSON.parse(localStorage.getItem( 4 ) );

            // Si el ancestro del nombre del producto que tiene el id tiene las clase 'info__span-product' le agrega el tachado a todo el "div"
            if( selectAncestroText.className === 'info__span-product' ){

                //Agrega una X al tacharlo y le paso el div seleccionado como parametro
                addX( selectDivProducts );

                selectAncestroText.classList.add('line-through');

                //Guardo el indice del producto tachado por su ID
                clickIndexFound.push(indexElementSelect);


                // splice seleccona un elemento por su indice, se seleciona el numero apartir de cuantos se quieren cambiar y se le pasa el valor a cambiar
                getPriceSavesLocal.splice(indexElementSelect, 1 , inputsSaves[indexElementSelect][1][1] );

                //Cambia el valor del precio guardado en la ejecucion para que no sea tomado en cuenta si un producto esta tachado
                priceSaves.splice(indexElementSelect, 1 , inputsSaves[indexElementSelect][1][1] );


                //Guarda el inputSaves con el precio cambiado 
                localStorage.setItem( 4, JSON.stringify( getPriceSavesLocal ) );

                showTotalPrice();
            
            // Si el ancestro del nombre del producto que tiene el id tiene las clase 'info__span-product line-through' le quita el tachado a todo el "div"   
            } else if( selectAncestroText.className === 'info__span-product line-through' ){
        
                const saveTotalPrice  = inputsSaves[indexElementSelect][1][0];
                const saveTotalAmount = inputsSaves[indexElementSelect][2];

                // Encuentra el indice del elemento que ya no esta tachado
                const findIndex = clickIndexFound.indexOf(indexElementSelect);

                // Agarra el indice que ya no esta tachado y lo pone a undefined
                clickIndexFound.splice(findIndex, 1, 'undefined');

                // Filtra a los indices que su valor fue cambiado a undefined y sacar un nuevo array sin ellos
                clickIndexFound = clickIndexFound.filter( ( data ) => {

                    return data != 'undefined';

                } );
                    

                // splice seleccona un elemento por su indice, se seleciona el numero apartir de cuantos se quieren cambiar y se le pasa el valor a cambiar
                const savePriceChangeLocal = getPriceSavesLocal.splice(indexElementSelect, 1 , parseInt( saveTotalPrice * saveTotalAmount ) );

                const saveTotalPriceLocal  = localStorage.setItem( 4, JSON.stringify( getPriceSavesLocal ) );
                    
                //Le borrar las clase de X, le pone la de la check y le paso el div seleccionado como parametro
                addCheck( selectDivProducts );

                // Le remueve una clase que tiene un tachado
                selectAncestroText.classList.remove('line-through');

                // Carga el precio total de cada producto
                loadTotalPriceLineThrough();

                // Suma el precio de cada articulo y lo muestra en el DOM
                showTotalPrice();
                                
            };        
        };

    };

    } );       
};