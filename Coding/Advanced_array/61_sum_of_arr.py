arr = list(map(int,input("Enter the element: ").split()))

i = 0
while(i<len(arr)):
  j = 0
  sum = 0
  while j<len(arr):
    if(i!=j):
      sum+=arr[j]
    j+=1
  
  print(sum,end=" ")
  i+=1

  #todo: timeComplexity = O(n^2)