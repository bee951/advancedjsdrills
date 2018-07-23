//1a)
//var name="Ben"
//console.log(name)
// logs Ben
//1b)
//name="ben"
//var name
//console.log(name)
// logs ben
//2)
//name="ben"
//let name
//console.log(name)
//name not defined
//3)
setname();
function setname() {
    var name= 'ben';
    console.log(name);
}
//console logs ben
//4)
console.log('intial text');
let avg=findAvg(2,2);
console.log('average', avg);
function findAvg(a,b) {
    console.log('function text');
    var answer=(a+b)/2;
    return answer;
}
//intial text
//function text
//average 2
//5)
let fruits=['banana','kiwi','orange'];
//let favFruit;
function printFruits() {
    let favFruit=fruits[1];
    console.log(fruits[0]);
    let leastFav=fruits[0]
    function printFavFruit(){
        console.log(favFruit);
    }
    printFavFruit();
    
}

printFruits();
//console.log(leastFav)
//with favFruit global function ran
//favFruit was an automatic global after the let was added it did not work
//when printFavFruit called outside function it does not work
//when printFavFruit called inside function it works
//6)
sfunc();
function sfunc() {
    console.log("potato");
}
//7)
fun2();
let fun2=function () { 
    alert("frog");
}
//fun2 not defined