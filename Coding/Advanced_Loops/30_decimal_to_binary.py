n = int(input("Enter the binary no:- "))

binary = ""

while (n>0):
  num = n%2
  binary = str(num) + binary
  n = n//2

print(binary)

# todo: time-complixity = O(log n)