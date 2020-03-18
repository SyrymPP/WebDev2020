def array_front9(nums):
	if len(nums) < 4:
		return 9 in nums
	for num in range(0,4):
		if nums[num] is 9: return True
	return False
