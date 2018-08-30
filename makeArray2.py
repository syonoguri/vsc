# for while 禁止

i = 1
x = []

def makeArray2():
    global i
    global x
    if i>30:
        return print(x)
    if i%3==0 or i%5==0 or i%7==0 or i%11==0:
        x.append(i)
    i += 1
    makeArray2()
        
            
makeArray2()
