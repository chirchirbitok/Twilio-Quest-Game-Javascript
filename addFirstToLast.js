function addFirstToLast(inputArray){
    //declare fist and last to be empty
    let firstandlast = '';
    let f=inputArray[0];
    let l = inputArray[inputArray.length-1];

    //
    if(inputArray.length>0){
        firstandlast = f + l;
    }

    return firstandlast;

}


    console.log(addFirstToLast(['first', 'second', 'third']));
    console.log(addFirstToLast(['golden','terrier']));
    console.log(addFirstToLast(['cheerio']));
    console.log(addFirstToLast([]));
    