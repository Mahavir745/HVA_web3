n = int(input("Enter the binary no:- "))

decimal = 0
i = 0

while (n>0):
  num = n%10
  decimal = decimal+ num*(2**i)
  i+=1
  n = n//10

print(decimal)

# todo: time-complixity = O(log n)