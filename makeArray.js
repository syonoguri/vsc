// １から30の整数の中で、３か５か７か11で割り切れる数字のみが格納された配列を作成する

const makeArray = function() {
    x = [];
    for(i=1; i<=30; i++) {
        if(i%3!==0 && i%5!==0 && i%7!==0 && i%11!==0) continue;
        x.push(i);
    }
    return x;
}

console.log(makeArray());