

const hourSavesLocal = ( clave, arr )=>{ 

    localStorage.setItem( clave, JSON.stringify( arr ) );

};

export {
    hourSavesLocal
}