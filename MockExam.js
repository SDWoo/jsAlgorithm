function solution(answers) {
  let first = [1, 2, 3, 4, 5];
  let second = [2, 1, 2, 3, 2, 4, 2, 5];
  let third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  let right = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    if (first[i % first.length] === answers[i]) {
      right[0]++;
    }
    if (second[i % second.length] === answers[i]) {
      right[1]++;
    }
    if (third[i % third.length] === answers[i]) {
      right[2]++;
    }
  }

  let max = Math.max(...right);
  let answer = [];
  for (let j = 0; j < right.length; j++) {
    if (right[j] === max) {
      answer.push(j + 1);
    }
  }

  return answer;
}

// 좋은 풀이 (완전탐색)

function solution2(answers2) {
  const answer2 = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const s1 = answers2.filter((a, i) => a1[i % a1.length] === a).length;
  const s2 = answers2.filter((a, i) => a2[i % a2.length] === a).length;
  const s3 = answers2.filter((a, i) => a3[i % a3.length] === a).length;

  const max = Math.max(s1, s2, s3);

  if (max === s1) answer2.push(1);
  if (max === s2) answer2.push(2);
  if (max === s3) answer2.push(2);

  return answer2;
}
