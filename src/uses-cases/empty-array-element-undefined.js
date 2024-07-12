import { clickIndexFound } from "./event-click";

export let arrayFilterIndexs  = [ ];
export let arrayFilterIds     = [ ];
export let arrayFilterProduct = [ ];
export let arrayFilterPrices  = [ ];


export let arrIndexsUpdate;

export const emptyArrayIndexsUndefined = ( emptyArr ) => { 

  // let arr;

  arrIndexsUpdate = emptyArr.filter( ( data ) => {

    // console.log(emptyArr);
    // console.log('empty Array Indexs Undefined');

      return emptyArr = data != 'undefined';

      

    } );    
};


export let arrIdsUpdate;

export const emptyArrayIdsUndefined = ( emptyArr ) => { 

  // let arr;

  arrIdsUpdate = emptyArr.filter( ( data ) => {

    // console.log(emptyArr);
    // console.log('empty Array Ids Undefined');

      return emptyArr = data != 'undefined';

      

    } );


};


export let arrProductUpdate;

export const emptyArrayProductUndefined = ( emptyArr ) => { 

  // let arr;

  arrProductUpdate =  emptyArr.filter( ( data ) => {

    // console.log(emptyArr);
    // console.log('empty Array Product Undefined');

      return emptyArr = data != 'undefined';

      

    });


    

 };

export let arrPricesUpdate;

export const emptyArrayPricesUndefined = ( emptyArr ) => { 

  // console.log(`emptyArrFuera: ${emptyArr}`);

  // let arr;


  // return arr = emptyArr.filter( ( data ) => {
    arrPricesUpdate = emptyArr.filter( ( data ) => {

      // console.log(`emptyArr: ${emptyArr}`);
      // console.log(`data: ${data}`);

      return emptyArr = data != 'undefined';

      

    } );

    // console.log(arr);
    

 };