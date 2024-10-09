
arr= list(map(int,input().split()))

i = 0
count = 0
found = 0

while(i<len(arr)-1):
  j = i+1
  while(j<len(arr)):
    if(arr[i]==arr[j]):
        count+=1
        found = arr[i]
        break
    j+=1
  if(count==1):
    break
  i+=1

if(count==1):
  print(found)
else:
  print("No")


#todo: time-complexity: O(n^2)