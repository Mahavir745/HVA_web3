n = int(input("Number of n:- "))


count = 0

while(n>0):
  count+=1
  n = n//10

print("total count: ", count)

#todo: time complexity - O(log n)