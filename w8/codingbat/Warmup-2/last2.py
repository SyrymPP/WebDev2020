def last2(str):
	sub = str[-2:]
	count = 0
	for i in range(0, len(str) - 2):
		if str[i:i+2] == sub: count += 1
	return count
