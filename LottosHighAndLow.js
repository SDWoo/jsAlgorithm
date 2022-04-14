function solution(lottos, win_nums) {
  const answer = [0, 0];
  const correctNum = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeros = lottos.filter((lotto) => lotto === 0).length;

  answer[0] = 7 - correctNum >= 6 ? 6 : 7 - correctNum;
  answer[1] = answer[0] - zeros < 1 ? 1 : answer[0] - zeros;

  return answer;
}
