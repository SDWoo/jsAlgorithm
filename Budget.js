function solution(d, budget) {
    var answer = 1;
    d.sort((a,b) => a - b);
    
    if(d[0] > budget) {
        answer = 0;
    }
    let arr = d.reduce((acc,a) => {
        if(a > budget){
            return a;
        }
        else if (acc + a< budget){
            answer += 1;
            return acc + a;
        }
        else if (acc + a == budget) {
            answer += 1;
            return acc + a;
        }
        
        else if(acc > budget){
            return acc;
        }
        
    });
    
    return answer;
}