# 配列nsからx回、逐次的にその時点での最大のnを１減らした配列にするメソッド

def cherry_pick(ns, x):
    i = 1
    while i <= x:
        mx = ns.index(max(ns))
        ns[mx] -= 1
        i += 1
    return ns

print(cherry_pick([9, 7, 8], 3))
print(cherry_pick([9, 7, 8], 10))
