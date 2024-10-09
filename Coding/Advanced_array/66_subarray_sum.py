arr = list(map(int,input().split()))
n = int(input())


found = False
i = 0
sum = 0
string = ""

while(i<len(arr)-1):
  j = i+1
  string = str(arr[i])
  sum = arr[i]

  while(j<len(arr)):
    if(sum != n):
      sum +=arr[j]
      string= string+" "+str(arr[j])
    else:
      found+=1
      break
    j+=1
  
  if(sum == n):
    print(string)
    found = True
    break
  
  i+=1

if(not(found)):
  print("Not Possible")