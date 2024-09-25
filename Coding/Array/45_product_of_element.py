
arr = list(map(int,input("Enter the element:- ").split()))

i = 0
product = 1
while(i<len(arr)):
  product*=arr[i]
  i+=1
print(product)

#todo: time-complexity: O(n)