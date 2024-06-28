numbers = input().strip().split()

numbers = list(map(int, numbers))

even_numbers = []

for num in numbers:
    if num % 2 == 0:
        even_numbers.append(num)

print(' '.join(map(str, even_numbers)))
