n = int(input("Enter the no n:- "))


rev = 0
while(n>0):
  num = n%10
  rev = rev*10 + num
  n = n//10

print(rev)
# todo: time-complexity = O(log n)