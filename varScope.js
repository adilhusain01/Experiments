var x = 20;

function foo(){
    //declare is below in this scope so upper call is undefined, if it was now declared and initiated below it wouldve used global scope
    console.log(x);
    var x = 10;
}

foo();
console.log(x);
