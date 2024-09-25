n = int(input("Number of n:- "))


i = 1
while(i*i<=n):
  if(n%i==0):
    print(i,end=" ")
  i+=1

while(i>0):
  if(n%i == 0):
    print(n//i, end=" ")
  i-=1

print()

#todo: time complexity - O(root of n)
