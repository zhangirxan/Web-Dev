n=int(input())
arr=list(map(int, input().split()))
x=0
for i in arr:
    if i>0:
        x+=1
print(x)