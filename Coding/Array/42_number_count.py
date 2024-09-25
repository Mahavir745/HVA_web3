
arr = list(map(int,input("Enter the element:- ").split()))
n = int(input("Enter the number:- "))
i = 0
count = 0
while(i<len(arr)):
  if(arr[i]==n):
    count+=1
  i+=1
print(count)

#todo: time-complexity: O(n)