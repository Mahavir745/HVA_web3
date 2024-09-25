n = int(input("Number of n:- "))


i = 1
factorial = 1
while(i<=n):
  factorial*=i
  i+=1

print("total sum: ", factorial)

#todo: time complexity - O(n)