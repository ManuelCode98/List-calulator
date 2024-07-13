


// Borra todo el local storage y recarga la pagina
export const clearAllLocalStorage = ()=>{ 

    const getProductLocal = JSON.parse( localStorage.getItem( 3 ) );

    if( getProductLocal.length === 0 ) {

        localStorage.clear();

        window.location.reload();

    };


};