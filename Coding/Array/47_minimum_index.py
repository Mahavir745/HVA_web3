arr = list(map(int,input("Enter the element:- ").split()))

i = 0
index = 0
min = 2345

while(i<len(arr)):
    
    if(min>arr[i]):
      min = arr[i]
      index = i
    i+=1

print(index+1)

#todo: time-complexity: O(n)