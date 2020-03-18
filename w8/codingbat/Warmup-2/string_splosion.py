def string_splosion(str):
	if len(str) == 0:
		return ""
	return string_splosion(str[:len(str) - 1]) + str
