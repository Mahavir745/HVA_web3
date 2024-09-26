arr = list(map(int,input("Enter the element: ").split()))

i = 0
null = 2**52

while i<len(arr):
    count = 1
    if(arr[i]!=null):
        j = i+1
        while(j<len(arr)):
            if(arr[i]==arr[j]):
                count +=1
                arr[j]=null
            j+=1
    if(count>=1):
        if(arr[i]!=null):
            print(arr[i],count)
    
    i+=1


#todo:  time-complexity = O(n^2)

            