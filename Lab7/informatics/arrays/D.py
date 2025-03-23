n=int(input())
arr=list(map(int, input().split()))
x=0
for i in range(1, n):
    if arr[i] > arr[i - 1]:
        x+=1
print(x)
