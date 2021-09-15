function scan(ArrStrings){
    let results = [];
    let contrabandCount = 0; 
    ArrStrings.forEach(function(item, index, array) {
        if(item == 'contraband'){
            results.push(contrabandCount);
        }
        contrabandCount++
        
      });
       return results;
}
const indexes = scan(['contraband', 'apples', 'cats', 'contraband', 'contraband']);
console.log('Contraband Indexes: ' + indexes);