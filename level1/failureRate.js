function solution(N, stages) {
  let answer = [];
  let person = stages.length;
  for (let i = 1; i <= N; i++) {
    answer.push([i, stages.filter((n) => n === i).length / person]);
    person -= stages.filter((n) => n === i).length;
  }
  console.log(answer);
  answer = answer.sort((a, b) => b[1] - a[1]).map((a) => a[0]);
  return answer;
}
