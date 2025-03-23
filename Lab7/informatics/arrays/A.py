n=int(input())
arr=list(map(int, input().split()))
x=[]
for i, num in enumerate(arr):
    if i%2 == 0:
        x.append(num)
print(*x)