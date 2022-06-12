function solution(left, right) {
  var answer = 0;
  let tmp = 0;
  for (let i = left; i <= right; i++) {
    for (let j = 1; j <= i; j++) {
      if (i % j == 0) {
        tmp++;
      }
    }
    if (tmp % 2 == 0) {
      answer += i;
    } else {
      answer -= i;
    }
    tmp = 0;
  }

  return answer;
}
