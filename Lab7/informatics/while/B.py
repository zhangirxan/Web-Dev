n=int(input())
x=2
while x<=n:
    if n%x==0:
        print(x)
        break
    else:
        x+=1