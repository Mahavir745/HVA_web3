n = int(input("Enter the no n:- "))

m = n
armstong = n

count = 0
while(n>0):
  count+=1
  n = n//10

sum = 0
while(m>0):
  num = m%10
  sum+=num**count
  m = m//10

armstongNumber = "Its an armstrong number:" if sum == armstong else "It's not an armstrong number"

print(armstongNumber)