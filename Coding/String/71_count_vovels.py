
string = input().lower()
countV = 0
countC = 0

i = 0


while i < len(string):

    if (string[i] == "a" or string[i] == "e" or string[i]=='i' or string[i] == "o" or string[i] == "u"):
        countV += 1
    elif string[i].isalpha():
        countC += 1
    i += 1


print(countV, countC)
