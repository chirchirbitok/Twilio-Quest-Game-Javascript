function calculateMass(freightItems) {
    // This is a placeholder for the total length in characters of all strings
    // in the freightItems array
    //let StrLength = [freightItems[0].length, freightItems[1].length, freightItems[2].length];
    // var length = parseInt(StrLengh);
    // let totalMass = freightItems.reduce((acc, curr) => {
    //     return acc  + curr;
    //   });
     // let result = freightItems.reduce((sum, current) => sum + current, 0);
    // Mass = parseInt(`${result.length}`);
    //return result;

    totalMass = 0;

    freightItems.forEach(function(item){
      totalMass += item.length
    });
    return totalMass;
  }
  
  // The following lines of code are not required for the solution, but can be
  // used by you to test your solution.
  let arrayList = ['dog', 'donkey', 'cat'];
  //let StrLength = [arrayList[0].length, arrayList[1].length, arrayList[2].length];
  const mass = calculateMass(arrayList);
  console.log('Total mass of items is ' + mass);