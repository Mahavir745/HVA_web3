n = int(input("Number of n:- "))

i = 1
sum = 0

while(i<n):
  if(n%i==0):
    sum+=i
  i+=1

perfect = "It's perfect no:" if sum == n else "Its not a perfect no:"
print(perfect)
#todo: time complexity - O(n)
