n=int(input())  
d={name:list(map(float,marks)) for name,*marks in (input().split() for _ in range(n))}  
print(f"{sum(d[input()])/3:.2f}")  
