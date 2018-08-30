const makeArray2 = function() {
    let x = [];
    let i = 0;
    (function push_i() {
        i++;
        if(i>30) { return; }
        if(i%3===0 || i%5===0 || i%7===0 || i%11===0) { x.push(i); } 
        push_i()       
    })();
    return x;
}

console.log(makeArray2());

