arr = list(map(int,input("Enter the element:- ").split()))

i = 0
sum = 0

while(i<len(arr)):
    if(arr[i]!=0):
        sum+=arr[i]
    else:
        break
    i+=1

print(sum)

#todo: time-complexity: O(n)