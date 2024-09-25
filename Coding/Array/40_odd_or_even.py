
arr = list(map(int,input("Enter the element:- ").split()))

i = 0
while(i<len(arr)):
  if(arr[i]%2==0):
    print("Even")
  else:
    print("Odd")
  i+=1

#todo: time-complexity: O(n)