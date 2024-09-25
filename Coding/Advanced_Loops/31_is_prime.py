n = int(input("Enter a number:- "))


i= 2
count = 1
while(i*i < n):
  
  if(n%i == 0):
    count+=1
  i+=1

prime = "It's prime" if count==1 else "It's not prime"

print(prime)

# todo: time-complexity = O(root n)