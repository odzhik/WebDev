numbers = input().strip().split()

numbers = list(map(int, numbers))

positive_count = 0

for num in numbers:
    if num > 0:
        positive_count += 1

print(positive_count)
