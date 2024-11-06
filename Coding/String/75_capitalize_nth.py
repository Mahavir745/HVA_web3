s = input()
index = int(input())

result = ""
i = 0

s2 = s[index].upper()

while(i<len(s)):
    if(i != index):
        result+=s[i]
    else:
        result+=s2
    i+=1


print(result)