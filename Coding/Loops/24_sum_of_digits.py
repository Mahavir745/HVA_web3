n = int(input("Number of n:- "))


sum = 0

while(n>0):
  num = n%10
  sum+=num
  n = n//10

print("total count: ", sum)

#todo: time complexity - O(log n)