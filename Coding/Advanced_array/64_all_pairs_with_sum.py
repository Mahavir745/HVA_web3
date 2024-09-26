arr = list(map(int,input("Enter the element: ").split()))
n = int(input("Enter the value of n: "))


i = 0

while(i<len(arr)):
  j = i+1
  while(j<len(arr)):
    if(arr[i]+arr[j] == n):
      print(arr[i],arr[j])
    j+=1
  i+=1

# todo: time-complexity = O(n^2)