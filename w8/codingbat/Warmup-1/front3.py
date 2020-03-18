def front3(str):
	if len(str) < 3:
		if len(str) < 2:
			return 3 * str
		else:
			return 3 * str[0:2]
	return 3 * str[0:3]
