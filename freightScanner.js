
function scan(stringArr){
    let contrabandCount = 0;
    
    stringArr.forEach(function(item) {
        if(item == 'contraband'){
            contrabandCount++;
        }
    });
    return contrabandCount;
    
}

const numItems = scan(['dog', 'contraband', 'cat', 'zippers', 'contraband']);
console.log('Number of "contraband": ' + numItems); 
