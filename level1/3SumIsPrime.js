function solution(nums) {
    nums.sort();
    let answer = 0;

    for(let i = 0; i<nums.length-2; i++){  
        for(let j = i+1; j <nums.length-1; j++){
            for(let k = j+1; k<nums.length; k++){
                if(findPrimeNumber(nums[i]+nums[j]+nums[k])){
                    answer +=1;
                }
            }
        }
    }
    return answer;
}

function findPrimeNumber(num) {
    let isPrime = true;
    for(let n = 2; n<num; n++) {
        if(num%n === 0) {
            isPrime = false;
        }
    }
    return isPrime;
}