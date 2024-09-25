arr = list(map(int,input("Enter the element:- ").split()))

i = 0
max = 0


while(i<len(arr)-1):
    sum = arr[i]+arr[i+1]
    if(sum>max):
        max = sum
    i+=1

print(max)

#todo: time-complexity: O(n)