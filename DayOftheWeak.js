function solution(a, b) {
  const Day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const month = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let date = 0;
  for (let i = 1; i < a; i++) {
    date += month[i];
  }

  return Day[(date + b + 4) % 7];
}
