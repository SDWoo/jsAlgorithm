function solution(new_id) {
  let answer = '';

  const pattern1 = /[!?@#$%^&*():;+=~{}<>\[\]\|\\\"\'\,\/\`\₩]/g;
  const pattern2 = /.../g;
  //1,2,3 단계
  new_id = new_id
    .toLowerCase('')
    .replace(pattern1, '')
    .replace('...', '.')
    .replace('..', '.');
  let testId = new_id.split('').map((n) => n);

  // 4 단계
  let left = 0;
  let right = testId.length - 1;
  let level4Checking = true;
  while (level4Checking) {
    if (testId[left] === '.') {
      testId.shift();
      left += 1;
    } else if (testId[right] === '.') {
      testId.pop();
      right -= 1;
    } else {
      testId = testId.join('');
      level4Checking = false;
    }
  }

  //5단계
  if (testId.length === 0) {
    testId += 'a';
  }
  // 6단계
  let level6 = testId.split('').map((n) => n);
  if (level6.length <= 15) {
    if (level6.length < 3) {
      while (level6.length < 3) {
        level6.push(level6[level6.length - 1]);
      }
    }
  } else {
    level6.splice(15, level6.length - 14);
    if (level6[14] === '.') {
      level6.pop();
    }
  }
  answer = level6.join('');
  return answer;
}
