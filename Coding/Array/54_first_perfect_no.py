arr = list(map(int,input("Enter the element:- ").split()))

i = 0
value = 0

while(i<len(arr)):
    a = 1
    while(a<arr[i]):
        if(arr[i]==a*a):
            value = arr[i]
            break
        a+=1
    i+=1

print(sum)

#todo: time-complexity: O(n)