arr = list(map(int,input().split()))

arrsum = 0

i = 0
while(i<len(arr)):
  j = i
  while(j<len(arr)):
    k = i
    while(k<=j):
      arrsum+=arr[k]
      k+=1
    j+=1
  i+=1
  
print(arrsum)