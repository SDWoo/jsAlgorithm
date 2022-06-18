function solution(new_id) {
    let answer = '';

    
    const pattern3 = /[^a-z0-9-\_\.]/g
    //1,2,3 단계
    new_id = new_id
        .toLowerCase("")
        .replace(pattern3,'')
        .replace(/[.]{2,}/gi, '.')
        .replace(/^[.]|[.]$/gi,'');
    let testId = new_id.split("").map(n=>n)
    
    // 4 단계
    let left = 0
    let right = testId.length-1
    let level4Checking = true
    while (level4Checking) {
        if(testId[left] === '.'){
            testId.shift();
            left += 1
        } 
        else if(testId[right] === '.'){
            testId.pop();
            right -= 1
        }
        else{
            testId = testId.join('')
            level4Checking = false;
        }
    }
    
    //5단계
    if(testId.length === 0) {
        testId += 'a'
    }
    // 6단계
    let level6 = testId.split('').map(n=>n)
    if(level6.length <= 15 ){
        if(level6.length < 3) {
            while(level6.length<3){
                level6.push(level6[level6.length-1])
            }
        }
    }else {
        level6.splice(15,level6.length-14)
        while(true){
            if(level6[level6.length-1] === '.') {
                level6.pop()
            }
            else{
                break;
            }
        }
        
    }
    answer = level6.join('')
    return answer;
}

// best
// const solution = (new_id) => {
//     const id = new_id
//         .toLowerCase()
//         .replace(/[^\w\d-_.]/g, '')
//         .replace(/\.{2,}/g, '.')
//         .replace(/^\.|\.$/g, '')
//         .padEnd(1, 'a')
//         .slice(0, 15)
//         .replace(/^\.|\.$/g, '')        
//     return id.padEnd(3, id[id.length-1])
// }