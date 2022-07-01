function solution(record) {
  const obj = {};
  const answer = [];
  record.forEach((message, index) => {
    const record_arr = message.split(" ");
    if (record_arr[0] !== "Leave") obj[record_arr[1]] = record_arr[2];
  });

  record.map((arr) => {
    const record_arr = arr.split(" ");
    if (record_arr[0] === "Enter")
      answer.push(`${obj[record_arr[1]]}님이 들어왔습니다.`);
    if (record_arr[0] === "Leave")
      answer.push(`${obj[record_arr[1]]}님이 나갔습니다.`);
  });

  return answer;
}
