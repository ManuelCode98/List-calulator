import { clickIndexFound } from "./event-click";

export let arrayFilterIndexs  = [ ];
export let arrayFilterIds     = [ ];
export let arrayFilterProduct = [ ];
export let arrayFilterPrices  = [ ];

export const emptyArrayIndexsUndefined = ( emptyArr ) => { 

  let arr;

  return arr = emptyArr.filter( ( data ) => {

    // console.log(emptyArr);
    // console.log('empty Array Indexs Undefined');

      return emptyArr = data != 'undefined';

      

    })


    
 };

export const emptyArrayIdsUndefined = ( emptyArr ) => { 

  let arr;

  return arr = emptyArr.filter( ( data ) => {

    // console.log(emptyArr);
    console.log('empty Array Ids Undefined');

      return emptyArr = data != 'undefined';

      

    })


    

 };


export const emptyArrayProductUndefined = ( emptyArr ) => { 

  let arr;

  return arr =  emptyArr.filter( ( data ) => {

    // console.log(emptyArr);
    // console.log('empty Array Product Undefined');

      return emptyArr = data != 'undefined';

      

    });


    

 };


export const emptyArrayPricesUndefined = ( emptyArr ) => { 

  let arr;

  return arr = emptyArr.filter( ( data ) => {


      return emptyArr = data != 'undefined';

      

    })


    

 };