function getFirstAmountSorted(inputArray, numberOfItems){
    let amountS = inputArray.sort();
    let newArr = amountS.slice(0,numberOfItems);

    return newArr;
}
const newArray = getFirstAmountSorted(['cat', 'apple', 'bat'], 2);
console.log(newArray);
