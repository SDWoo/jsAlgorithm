// fs 모듈
const { profileEnd } = require('console');
const fs = require('fs');

const input1 = fs.readFileSync(0).toString().split('\n');
const input2 = fs.readFileSync(0, 'utf-8').split('\n');
const input3 = fs.readFileSync(0, { encoding: 'utf8' }).split('\n');
console.log(input1);

//  readline 모듈
const readline = require('readline');

const rl = readline.createInterface({
  input: proccess.stdin,
  output: process.stdout,
});

// line 이벤트 => 입력 스트림이 줄바꿈입력을 받을때 마다 발생. 주로 유저가 Enter나 Return을 입력한 경우에 발생
rl.on('line', (input) => {
  console.log(`Received: ${input}`);
}).on('close', () => {
  // 저장된 변수를 이용하여 계산 후 출력
});

// close 이벤트
// => rl.close()함수가 호출되어 readline.interface인스턴스가 입추력 스트림의 권한을 포기한 상태일 떄
// => 입력스트림이 'end'이벤트 받은 경우, Ctrl+D를 받은 경우, Ctrl+C를 받았고 (SIGINT)가 readline.interface에 등록되지 않은 경우

// 따라서 readline모듈을 사용하면 각 줄이 입력될 때마다 'line'이벤트가 매번 발생하여 이를 변수에 저장하고, 'close' 이벤트가 발생하면 저장된 변수를 가지고 계산 진행

// String -> number 자료형 변환: Number vs New Number vs parseInt
// 1. Number(primitive 타입 반환) vs New Number(constructor로써 Object 반환)

const a = Number('0');
const b = new Number('0');
// object === primitive 은 false 반환

console.log(a === 0); // true
console.log(b === 0); // false

if (a) {
  // false이므로 조건문 실행 X
}
if (b) {
  // Object([Number: 0])은 boolean context에서 `true`이므로 조건문 내부가 실행됨
}

// 혼란을 피하기 위해서 new Number 사용 X

// 2. Number vs parseInt
// parseInt 는 브라우저 별 내부 구현 방법에 따라 다르게 해석
// So, radix를 기재하여야 함 (코딩테스트에서 크게 상관은없음)
// parseInt(str,10)과 Number(str)의 차이
const str = '10x';
console.log(parseInt(str, 10));
console.log(Number(10));

// 개인적인 차이지만 Number 사용

// const,let
// 함수 스코프 var 사용 지양, 블록스코프 const나 let 사용
