numbers = input().strip().split()

numbers = list(map(int, numbers))

result = []

for i in range(1, len(numbers)):
    if numbers[i] > numbers[i - 1]:
        result.append(numbers[i])

print(' '.join(map(str, result)))
