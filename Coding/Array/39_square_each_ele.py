
arr = list(map(int,input("Enter the element:- ").split()))

i = 0
while(i<len(arr)):
  print(arr[i]*arr[i],end=" ")
  i+=1
print()

#todo: time-complexity: O(n)