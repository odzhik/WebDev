correct_answer = int(input())
student_answer = int(input())

# Проверка правильности ответа
if (correct_answer == 1 and student_answer == 1) or (correct_answer != 1 and student_answer != 1):
    print("YES")
else:
    print("NO")