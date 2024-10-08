a,b,c = map(int,input("Enter a,b,c:- ").split())

if(a>b and a>c):
  print(a)
elif(b>c):
  print(b)
else:
  print(c)

#todo: time complexity - O(1)
