def is_leap(y):
    leap = False
    if (y % 4 == 0 and y % 100 != 0) or y % 400 == 0:
        leap = True
    return leap
year = int(input())
print(is_leap(year))