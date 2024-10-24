a,b = map(int,input("Enter the number a and b:- ").split())

while(a!=0 and b!=0):
  if(a>b):
    a = a%b
  else:
    b = b%a

if(a!=0):
   print(a)
else:
  print(b)

# todo: time-complexity: O(log(min(a,b)))