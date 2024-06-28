# Ввод списка чисел
numbers = list(map(int, input().strip().split()))

max_value = numbers[0]
max_index = 0

for i in range(1, len(numbers)):
    if numbers[i] > max_value:
        max_value = numbers[i]
        max_index = i

print(max_value, max_index)
