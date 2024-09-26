arr = list(map(int,input("Enter the element").split()))
k = int(input())

i = 0
value = 0
while i<len(arr):
  if(arr[i]>k):
    value = arr[i]
    break
  i+=1

if(value!=0):
  print(value)
else:
  print("NO")


# todo: time-complexity = O(n)