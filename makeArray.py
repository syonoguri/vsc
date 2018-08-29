# １から30の整数の中で、３か５か７か11で割り切れる数字のみが格納された配列を作成する

def makeArray():
    x = []
    i = 0
    while i < 30:
        i += 1
        if i%3==0 or i%5==0 or i%7==0 or i%11==0: continue
        x.append(i)
    return x

print(makeArray())
