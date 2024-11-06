s = input().lower()
w = input().lower()


i = 0
found = ""
while(i<len(s)):
  if(s[i] != "?" or s[i] !="," or s[i] != "." or s[i] !=":"):
    found+=s[i]
  i+=1
  
s2 = found.split()

count = 0
i = 0
while(i<len(s2)):
  if(s2[i] == w):
    count+=1
  i+=1

if(count>0):
  print("Yes")
else:
  print("No")
  