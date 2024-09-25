arr = list(map(int,input("Enter the element:- ").split()))

i = 0
count = 0


while(i<len(arr)):
    if(arr[i]>0):
        count+=1
    else:
        break
    i+=1

print(count)

#todo: time-complexity: O(n)