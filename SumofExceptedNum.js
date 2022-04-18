// 내 풀이
function solution(numbers) {
  let sum = 45;

  for (let i = 0; i < numbers.length; i++) {
    sum -= numbers[i];
  }

  return sum;
}

// javascript 스러운 풀이
function solution2(numbers) {
  return 45 - numbers.reduce((acc, cur) => acc + cur);
}
