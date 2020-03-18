def not_string(str):
	if str.find('not', 0, len('not')):
		return 'not' + str
	else:
		return str
