arr = list(map(int,input("Enter the element:- ").split()))
n = int(input("Enter the number: "))

i = 0
count = 0

while(i<len(arr)):
    if(arr[i]==n):
        count+=1
        break
    i+=1

if(count>=1):
  print('YES')
else:
    print("NO")

#todo: time-complexity: O(n)