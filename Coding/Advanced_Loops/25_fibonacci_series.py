n = int(input("Enter the no n:- "))

i = 0
a = 0
b = 1
c = 0
while(i<n):
  print(c,end=" ")
  a = b
  b = c
  c = a+b
  i+=1


# todo: time-complexity = O(n)