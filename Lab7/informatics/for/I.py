a=int(input())
x=0
for i in range(1, a+1):
    if a%i==0:
        x+=1
print(x)