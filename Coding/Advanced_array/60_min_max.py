arr = list(map(int,input("Enter the element:").split()))

i = 0
a = 0
b = 0
max = 0
min = 23456789

while (i<len(arr)-1):

  j = i+1
  while(j<len(arr)):
      if(arr[i]>arr[j]):
          a = arr[i] - arr[j]
      else:
         a = arr[j] - arr[i]

      if(a>max):
         max = a
      
      if(min>a):
         min = a
      j+=1
  i+=1
  

print(min,max)

#todo: time-complexity: O(n^2)

