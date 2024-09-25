n = int(input("Number of n:- "))


i = 1
sum = 0
while(i<=n):
  sum+=i
  i+=1

print("total sum: ", sum)

#todo: time complexity - O(n)


# another way with less time complexity

result = (n*(n+1))//2
print(result)

#todo: time complexity - O(1)