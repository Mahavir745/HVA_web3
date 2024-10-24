# arr = list(map(int,input("Enter the element:").split()))

# i = 0
# value = 0
# max = 0

# while (i<len(arr)-1):
#   j = i+1
#   count = 0
#   while j<len(arr):
#     if(arr[i]==arr[j]):
#       count+=1
#     j+=1
  
#   if(count>max):
#     max = count
#     value = arr[i]
#   i+=1
  

# print(value)

# # todo: time-complexity = O(n^2)
# # todo: space-complexity = O(1)


arr = list(map(int, input().split()))

i = 0
value = 0
max_count = 0  
while i < len(arr):
    j = 0
    count = 0
    while j < len(arr):
        if arr[i] == arr[j]:
            count += 1
        j += 1

    if count > max_count:
        max_count = count
        value = arr[i]
    
    i += 1

print(value)


