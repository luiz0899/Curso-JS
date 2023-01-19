/*console.log('vai começar .. ')

for( var c = 1 ; c <= 3 ;c++ ) {
    console.log(c)
}

console.log('fim')
*/
var valore = [1,5,3,9]//vetor
valore.sort()//ordenador 
valore.push(8)//add valor no vertor
for(var pos = 0; pos <= valore.length ; pos++) {
    console.log(`a posição ${pos} tem o valor ${valore[pos]} `)
}

valore.splice(4) //remove o elemento do vetor assim com pop que remove o ultimo e shift() que remove o primeiro

for(var pos = 0; pos <= valore.length ; pos++) {
    console.log(`a posição ${pos} tem o valor ${valore[pos]} `)
}