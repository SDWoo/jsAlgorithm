function solution(s) {
  const NumToAlphabet = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  for (const alp of NumToAlphabet) {
    s = s.replace(new RegExp(alp, 'g'), NumToAlphabet.indexOf(alp));
  }

  return parseInt(s);
}
