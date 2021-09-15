function construct (name){
    
    let user = {
        name : 'Irene',
        material : 'human',
        assemble : true,
        duration : 1000

        
    };
    return user;
}
const result = construct('Irene');
console.log('name is : '+ result.name);