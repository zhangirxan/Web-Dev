n=int(input())
x=0
while 2**x<=n:
    if 2**x==n:
        print("YES")
        break
    x+=1
else:
    print("NO")