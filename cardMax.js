function solution(sizes) {
  let widthMax = 0;
  let heightMax = 0;

  sizes.forEach((array) => {
    widthMax = Math.max(widthMax, array[0], array[1]);
    const arrayMin = Math.min(array[0], array[1]);
    heightMax = Math.max(heightMax, arrayMin);
  });
  return widthMax * heightMax;
}
