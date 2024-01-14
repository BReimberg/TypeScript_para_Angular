function concatArray(...itens: any[]): any[] {
    return new Array().concat(...itens)
    }
    
    const numArray = concatArray([1, 5], [3]);
    const stgArray = concatArray(["brenda", "maria"], ["joão"]);
    
    /*------------------------------------------------------------------------
    TIPADOS:
    
    function concatArray<T>(...itens: T[]): T[];{
    return new Array().concat(...itens);
    }
    
    const numArray = concatArray<number[]>([1, 5], [3]);
    const stgArray = concatArray<string[]>(["brenda", "maria"], ["joão"]);
    ------------------------------------------------------------------------ */
    
    numArray.push("Juliano"); //vetor de any;
    
    console.log(stgArray);
    //RESULTADO: [ 'brenda', 'maria'], [ 'joão' ]
    console.log(numArray);
   //RESULTADO: [1, 5, 3]