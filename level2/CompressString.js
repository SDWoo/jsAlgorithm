function solution(s) {
  let answer = s.length;
  for (let i = 1; i <= s.length / 2; i++) {
    let prev = s.substr(0, i);
    let str = "";
    let count = 1;
    for (let j = i; j < s.length; j += i) {
      let next = s.substr(j, i);
      if (prev === next) {
        count++;
      } else {
        str += (count > 1 ? count : "") + prev;
        count = 1;
        prev = next;
      }
    }

    str += (count > 1 ? count : "") + prev;
    answer = Math.min(answer, str.length);
  }

  return answer;
}
