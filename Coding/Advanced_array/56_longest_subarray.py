# arr = list(map(int,input("Enter the element:").split()))

# max = 0
# i = 0
# while(i<len(arr)-1):
#   count = 1
#   j = i+1
#   while(j<len(arr)):
#     if(arr[i]>arr[j]):
#       break
#     elif(arr[i]<=arr[j] and arr[j]<=arr[j-1]):
#       count+=1
#     j+=1
  
#   if(count>max):
#     max = count
#   i+=1

  
  
# print(max)

# # todo: time complixity = O(n^2)

arr = list(map(int, input().split()))

maxim = 1
count = 1
i = 1 

while i < len(arr):
    if arr[i] > arr[i - 1]:
        count += 1
    else:
        if count > maxim:
            maxim = count
        count = 1 
    i += 1  

if count > maxim:
    maxim = count

print(maxim)

