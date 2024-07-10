import { clickIndexFound } from "./event-click";

export let arrIndexUnderlineNoRepeat = [ ];

export const indexUnderlineNoRepeat = ()=>{ 

    const newSetArr = new Set(clickIndexFound);

    arrIndexUnderlineNoRepeat = [...newSetArr];

    // localStorage.setItem( 5, arrIndexUnderlineNoRepeat );

    // const getIndexOfUnderline = JSON.parse( localStorage.getItem( 5 ) );


    if( arrIndexUnderlineNoRepeat.length === 0 ){
        // if( getIndexOfUnderline.length === 0 ){   


        const getPriceCeroLocal = JSON.parse( localStorage.getItem( 4 ) );

        const valueSearch = 0;

        let indexCeroSearch = getPriceCeroLocal.indexOf( valueSearch );


        while ( indexCeroSearch != -1 ){

            arrIndexUnderlineNoRepeat.push( indexCeroSearch );
    
            indexCeroSearch = getPriceCeroLocal.indexOf( valueSearch, indexCeroSearch + 1 ) ;

        };


    };

   
};
