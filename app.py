def reverse(s):
    str = ""
    for i in s: 
        str = i + str
    return str

s = "Geeksforgeeks"

print ("The original string is : ", end="")
print(s)

print ("The reverse string (using loops) is : ", end="")
print(reverse(s))

def reverse2(v):
    str2 = ""
    for i in v:
        str2 = i + str2
        return str

v = "make it happen"

print("The normal string orintation : ", end="")
print(v)

print("The reverse string orintation : ", end="")
print(reverse2(v))

