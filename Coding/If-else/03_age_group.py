n = int(input("Enter the age group:- "))

if(n>=0 and n<=2):
  print("Infant")
elif(n>=3 and n<=12):
  print("Child")
elif(n>=13 and n<=19):
  print("Teenager")
elif(n>=20 and n<=65):
  print("Adult")
else:
  print("Senior")

#todo: time complexity - O(1)
