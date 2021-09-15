const plantLife = Number(process.argv[2]);
const plantDryness = Number(process.argv[3]);

if(plantLife === 1 ){
    console.log('');
}else if(plantLife===0 && plantDryness >=11){
    console.log('WATER');
}else if(plantLife === 1 || plantDryness <= 10 ){
    console.log('');
}