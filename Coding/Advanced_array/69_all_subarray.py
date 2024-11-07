arr = list(map(int,input().split()))


i = 0
while(i<len(arr)):
  j = i
  while(j<len(arr)):
    k = i
    while(k<=j):
      print(arr[k],end=" ")
      k+=1
    print()
    j+=1
  i+=1
