
arr = list(map(int,input("Enter the element:- ").split()))

i = 0
sum = 0
while(i<len(arr)):
  sum+=arr[i]
  i+=1
print(sum/len(arr))

#todo: time-complexity: O(n)