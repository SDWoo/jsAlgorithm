function solution(n) {
  var answer = 0;
  let i = 1;
  while (true) {
    if (n % i == 1) {
      answer = i;
      break;
    } else {
      i++;
    }
  }
  return answer;
}
gi;
