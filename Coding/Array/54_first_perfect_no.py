arr = list(map(int,input("Enter the element:- ").split()))

i = 0
value = 0

while(i<len(arr)):
    a = 1
    found = False
    
    while(a<=arr[i]):
        if(arr[i]==a*a):
            value = arr[i]
            found = True
            break
        a+=1
    
    if(found):
        break
    i+=1

if(value!=0):
    print(value)
else:
    print("NO")

#todo: time-complexity: O(n log n)