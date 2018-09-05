// makeArray3.jsの改善

const makeArray4 = function a() {
    let x = [];
    let i = 0;
    (function push_i() {
        i++;
        if(i>30) { return; }
        x.push(i);
        push_i()       
    })();
    
    function b(value, index, sourceArray){
        if(value%3===0 || value%5===0 || value%7===0 || value%11===0) {
            return true;
        } else {
            return false;
        }
    }
    return x.filter(b);
}

console.log(makeArray4());