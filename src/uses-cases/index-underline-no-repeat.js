import { clickIndexFound } from "./event-click";

export let arrIndexUnderlineNoRepeat = [ ];

export const indexUnderlineNoRepeat = ()=>{ 

    const newSetArr = new Set(clickIndexFound);

    arrIndexUnderlineNoRepeat = [...newSetArr];


    if( arrIndexUnderlineNoRepeat.length === 0 ){

        const getPriceCeroLocal = JSON.parse( localStorage.getItem( 4 ) );

        const valueSearch = 0;

        let indexCeroSearch = getPriceCeroLocal.indexOf( valueSearch );

        // Busca el indice de los elementos que estan en 0
        while ( indexCeroSearch != -1 ){

            arrIndexUnderlineNoRepeat.push( indexCeroSearch );
    
            indexCeroSearch = getPriceCeroLocal.indexOf( valueSearch, indexCeroSearch + 1 ) ;

        };


    };
  
};
