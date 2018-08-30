// 配列nsからx回、逐次的にその時点での最大のnを１減らした配列にするメソッド
// for while 禁止

const cherry_pick = function(ns, x){
    let i=1;
    function minus() {
        if(i>x){ return; }
        mx = ns.indexOf(Math.max.apply(null,ns));
        ns[mx] -= 1;
        i++;
        minus();
    }
    minus();
    return ns;
}

console.log(cherry_pick([9, 7, 8], 3));
console.log(cherry_pick([9, 7, 8], 10));
