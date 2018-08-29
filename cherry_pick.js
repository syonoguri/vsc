// 配列nsからx回、逐次的にその時点での最大のnを１減らした配列にするメソッド

const cherry_pick = function(ns, x){
    for(i=1; i<=x; i++){
        mx = ns.indexOf(Math.max.apply(null,ns));
        ns[mx] -= 1;
    }
    return ns;
}

console.log(cherry_pick([9, 7, 8], 3));
console.log(cherry_pick([9, 7, 8], 10));
