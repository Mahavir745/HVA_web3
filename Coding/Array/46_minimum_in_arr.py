
arr = list(map(int,input("Enter the element:- ").split()))

i = 0
min = 123456789
while(i<len(arr)):
  if(min>arr[i]):
    min = arr[i]
  i+=1
print(min)

#todo: time-complexity: O(n)