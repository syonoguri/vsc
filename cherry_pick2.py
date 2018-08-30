# 配列nsからx回、逐次的にその時点での最大のnを１減らした配列にするメソッド
# for while禁止
i = 1
def cherry_pick(ns, x):
    global i
    if i>x: return ns
    mx = ns.index(max(ns))
    ns[mx] -= 1
    i += 1


print(cherry_pick([9, 7, 8], 3))
print(cherry_pick([9, 7, 8], 10))