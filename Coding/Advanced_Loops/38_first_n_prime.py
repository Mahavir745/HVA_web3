n = int(input("Enter a number n: "))

i = 0 
a = 2 

while i < n:
    found = True
    j = 2
    while j*j <= a:
        if a%j == 0:
            found = False
            break
        j += 1

    if found:
        print(a, end=" ")
        i += 1  
    a += 1  

print()