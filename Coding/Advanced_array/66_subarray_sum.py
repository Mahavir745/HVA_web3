# arr = list(map(int,input().split()))
# n = int(input())


# found = False
# i = 0
# sum = 0
# string = ""

# while(i<len(arr)-1):
#   j = i+1
#   string = str(arr[i])
#   sum = arr[i]

#   while(j<len(arr)):
#     if(sum != n):
#       sum +=arr[j]
#       string= string+" "+str(arr[j])
#     else:
#       found+=1
#       break
#     j+=1
  
#   if(sum == n):
#     print(string)
#     found = True
#     break
  
#   i+=1

# if(not(found)):
#   print("Not Possible")




# arr = list(map(int, input().split()))
# n = int(input())

# found = False
# i = 0

# while i < len(arr): 
#     j = i 
#     sum = 0
#     string = ""

#     while j < len(arr):
#         sum += arr[j]
#         string += str(arr[j]) + " "

#         if sum == n:
#             print(string.strip())  
#             found = True
#             break 
#         j += 1

#     if found: 
#         break

#     i += 1

# if not found:
#     print("Not Possible")



arr = list(map(int, input().split()))
n = int(input())

found = False
i = 0

while i < len(arr):  
    j = i  
    sum = 0  
    string = ""

    while j < len(arr):
        sum += arr[j]
        
        if j == i:  
            string += str(arr[j])
        else:
            string += " " + str(arr[j]) 

        if sum == n:
            print(string) 
            found = True
            break 

        j += 1

    if found: 
        break

    i += 1

if not found:
    print("Not Possible")
