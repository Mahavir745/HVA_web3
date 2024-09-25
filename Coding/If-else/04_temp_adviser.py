n = int(input("Enter the current temperature:- "))

if(n>30):
  print("It's hot. Let's go swimming!")
elif(n>=20 and n<=30):
  print("Perfect for a picnic")
elif(n>=10 and n<=19):
  print("Maybe wear a jacket?")
else:
  print("Too cold! Best to stay indoors")

#todo: time complexity - O(1)
