function bubbleSort(array) {

    let sortHappened;
    let len = array.length;

    for (let i = 0; i < len; i++) {        

        if (sortHappened === false || len === 0) {
            
            return array;
        }

        sortHappened = doSort(array)

        
    }

    return array;

}

function doSort(array) {

    let sortHappened;

    for (let j = 0; j < array.length - 1; j++) {
            
        if (array[j] > array[j+1]) {
            let tmp = array[j]
            array[j] = array[j+1];
            array[j+1] = tmp;

            sortHappened = true;
        }
    }

    return sortHappened;
}


