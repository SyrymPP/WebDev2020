def find_n(n):
    while n!=0:
        if (n%2==0):
            print(n)
        elif(n%2!=0):
            n=n+1
        n=n-2
print(find_n(19))