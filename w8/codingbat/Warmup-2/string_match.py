def string_match(a, b):
	short = a if len(a) < len(b) else b
	count = 0
	for i in range(0, len(short) - 1):
		if a[i:i+2] == b[i:i+2]: count += 1
	return count
