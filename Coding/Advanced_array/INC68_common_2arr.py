n = int(input())

arr = list(map(int,input().split()))
arr2 = list(map(int,input().split()))

null = -1234
i = 0
string = ""

while(i<n):
  j = 0
  while(j<n):
    if(arr2[j]!= null):
      if(arr[i] == arr2[j]):
        arr2[j] = null
        string = string + str(arr[i]) + " "
    j+=1
  i+=1

if(string !=""):
  print(string)
else:
  print("No")