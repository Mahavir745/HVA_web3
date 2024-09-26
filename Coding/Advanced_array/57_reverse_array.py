arr = list(map(int,input("Enter the element:").split()))

i = 0
j = len(arr)-1

while (i<j):
  temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
  i+=1
  j-=1

print(arr)

# todo: time-complexity = O(n/2) ---> O(n)

