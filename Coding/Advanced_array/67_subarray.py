# Input the first and second arrays
arr = list(map(int, input().split()))
arr2 = list(map(int, input().split()))

n = len(arr)
m = len(arr2)

i = 0
found = False

while i <= n - m: 
    j = 0
    while j < m:
        if arr[i + j] != arr2[j]:  
            break
        j += 1
    if j == m:
        found = True
        break
    i += 1

if found:
    print("Yes")
else:
    print("No")
