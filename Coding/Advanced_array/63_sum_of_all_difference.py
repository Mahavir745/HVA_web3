arr = list(map(int,input("Enter the element: ").split()))

sum = 0
i = 0

while(i<len(arr)):
  j = i+1
  while(j<len(arr)):
    if(arr[i]>arr[j]):
        sum += (arr[i]-arr[j])
    else:
       sum += (arr[j]- arr[i])
    j+=1
  i+=1

print(sum)

# todo: time-complexity = O(n^2)