# s1 = ''.join(input().lower().split())
# s2 = ''.join(input().lower().split())

# if sorted(s1) == sorted(s2):
#     print("Yes")
# else:
#     print("No")

s1 = input().lower()
s2 = input().lower()

str1 =""
i = 0
while(i<len(s1)):
  if(s1[i]!=" "):
    str1+=s1[i]
  i+=1

str2 =""
i = 0
while(i<len(s2)):
  if(s2[i]!=" "):
    str2+=s2[i]
  i+=1

if(sorted(str1) == sorted(str2)):
  print("yes")
else:
  print("No")

