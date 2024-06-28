numbers = list(map(int, input().strip().split()))

result = None

for i in range(len(numbers) - 1):
    if (numbers[i] > 0 and numbers[i + 1] > 0) or (numbers[i] < 0 and numbers[i + 1] < 0):
        result = (numbers[i], numbers[i + 1])
        break

if result:
    print(result[0], result[1])
