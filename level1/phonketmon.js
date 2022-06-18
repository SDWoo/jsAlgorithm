function solution(nums) {
  let Nnums = nums.length / 2;
  nums = [...new Set(nums)];

  if (nums.length < Nnums) {
    return nums.length;
  } else {
    return Nnums;
  }
}
