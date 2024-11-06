s = input()
c = input()
count = 0
i = 0
while(i<len(s)):
  if(s[i]==c):
    count+=1
  i+=1

if(count>0):
  print("Yes")
else:
  print("No")