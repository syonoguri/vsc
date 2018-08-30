// 最初に配列を用意するバージョンを作る for while 禁止
function makeArray3() {
    let x=[];
    let y=[];
    let i=1;
    let j=1
    let k=0

    // 1から３０までの配列を作成
    function a() {
        if(i>31) { return; }
        x.push(true);
        i++;
        a();
        }

    //条件に合わない要素をfalseにする
    function b() {
        if(j>30) { 
            x[0]=false;
            return; 
        }
        if(j%3!==0 && j%5!==0 && j%7!==0 && j%11!==0) { x[j] = false; }
        j++;
        b();
    }

    //trueの添字のみを出力した配列を作る 
    function c() {
        if(k>30){ return; }
        if(x[k]===true){ y.push(k); }
        k++;
        c();
    }
    a();
    b();
    c();
    return y;
    
}
console.log(makeArray3());