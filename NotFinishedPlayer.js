function solution(participant, completion) {
  const answer = new Map();

  for (let i = 0; i < participant.length; i++) {
    answer.set(participant[i], (answer.get(participant[i]) || 0) + 1);
    answer.set(completion[i], (answer.get(completion[i]) || 0) - 1);
  }

  for (const [v, i] of answer) {
    if (i > 0) return v;
  }

  return 'nothing';
}
