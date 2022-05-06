function solution(n, lost, reserve) {
  lost.sort();
  reserve.sort();
  let newLost = lost.filter((value) => !reserve.includes(value));
  let newReserve = reserve.filter((value) => !lost.includes(value));

  for (let i = 0; i < newLost.length; i++) {
    const before = newLost[i] - 1;
    const after = newLost[i] + 1;
    if (newReserve.find((e) => e === before)) {
      newReserve.splice(newReserve.indexOf(before), 1);
      newLost[i] = 0;
    } else if (newReserve.find((e) => e === after)) {
      newReserve.splice(newReserve.indexOf(after), 1);
      newLost[i] = 0;
    }
  }
  return n - newLost.filter((n) => n).length;
}
