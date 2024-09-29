def bonus_time(salary, bonus):
    return f"${salary * 10 if bonus else salary}"

print(bonus_time(1000, True))