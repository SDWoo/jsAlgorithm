function solution(arr, divisor) {
    
    return arr.filter(n => n%divisor == 0).length > 0? arr.filter(n=> n%divisor == 0).sort((a,b) => a-b) : [-1];
}