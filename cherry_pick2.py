# 配列nsからx回、逐次的にその時点での最大のnを１減らした配列にするメソッド
# for while禁止




def cherry_pick(ns, x):
    if (x<1):
        return print(ns)
    else:
        mx = ns.index(max(ns))
        ns[mx] -= 1
        x -= 1
        cherry_pick(ns,x)
    

    

cherry_pick([9, 7, 8], 3)
cherry_pick([9, 7, 8], 10)

