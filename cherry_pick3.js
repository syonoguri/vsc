// 展開演算子を使用

const cherry_pick = function(ns, x){
    for(i=1; i<=x; i++){
        mx = ns.indexOf(Math.max(...ns));
        ns[mx] -= 1;
    }
    return ns;
}

console.log(cherry_pick([9, 7, 8], 3));
console.log(cherry_pick([9, 7, 8], 10));