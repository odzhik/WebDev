import math
a = int(input())
b = int(input())

for number in range(a, b + 1):
    sqrt_number = math.isqrt(number)
    if sqrt_number * sqrt_number == number:
        print(number)