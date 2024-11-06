string = input().lower()
c = input().lower()

i = 0
count = 0

while(i<len(string)):
  if(string[i] == c):
    count+=1
  i+=1


if(count>0):
  print(count)
else:
  print("No")