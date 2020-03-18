def string_bits(str):
	newStr = ""
	for idx,char in enumerate(str):
		if idx % 2 == 0: newStr += char
	return newStr
