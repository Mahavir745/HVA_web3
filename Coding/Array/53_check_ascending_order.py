arr = list(map(int,input("Enter the element:- ").split()))

i = 0
count = 0
while(i<len(arr)-1):
  if(arr[i]<arr[i+1]):
    count+=1
  else:
    break
  i+=1

if(count == len(arr)-1):
  print("YES")
else:
  print("NO")

#todo: time-complexity: O(n)