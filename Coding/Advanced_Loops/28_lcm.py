a,b = map(int,input("Enter the number a and b:- ").split())


hcf=0
lcm= a*b
while(a!=0 and b!=0):
  if(a>b):
    a = a%b
  else:
    b = b%a

if(a!=0):
   hcf = a
else:
    hcf = b


lcm = lcm/hcf
print(lcm)
# todo: time-complexity: O(a log b) 