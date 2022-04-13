function solution(numbers, hand) {
  const keyPad = {
    1: [1, 1],
    2: [1, 2],
    3: [1, 3],
    4: [2, 1],
    5: [2, 2],
    6: [2, 3],
    7: [3, 1],
    8: [3, 2],
    9: [3, 3],
    '*': [4, 1],
    0: [4, 2],
    '#': [4, 3],
  };
  const result = '';
  const leftHand = [4, 1];
  const rightHand = [4, 3];

  for (const num of numbers) {
    let numLocation = keyPad[num];

    if (numLocation[1] === 1) {
      leftHand = numLocation;
      answer += 'L';
    } else if (numLocation[1] === 3) {
      rightHand = numLocation;
      answer += 'R';
    } else {
      let leftDistance =
        Math.abs(leftHand[0] - numLocation[0]) +
        Math.abs(leftHand[1] - numLocation[1]);
      let rightDistance =
        Math.abs(rightHand[0] - numLocation[0]) +
        Math.abs(rightHand[1] - numLocation[1]);

      if (leftDistance === rightDistance) {
        if (hand === 'left') {
          leftHand = numLocation;
          answer += 'L';
        } else {
          rightHand = numLocation;
          answer += 'R';
        }
      } else if (leftDistance < rightDistance) {
        rightHand = numLocation;
        answer += 'R';
      } else {
        leftHand = numLocation;
        answer += 'L';
      }
    }
  }
  return answer;
}
