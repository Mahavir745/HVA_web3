arr = list(map(int,input("Enter the element:").split()))

i = 0
j = len(arr)-1
count = 0

while (i<j):
  if(arr[i]==arr[j]):
    count+=1
  i+=1
  j-=1

if(count == (len(arr)//2)):
  print("YES")
else:
  print("NO")

# todo: time-complexity = O(n/2) ---> O(n)
