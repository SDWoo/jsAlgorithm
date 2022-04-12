// best case
function solution(id_list, report, k) {
  const reports = [...new Set(report)].map((rep) => rep.split(' '));
  const counter = new Map();
  for (const ban of reports) {
    counter.set(ban[1], counter.get(ban[1]) + 1 || 1);
  }
  const banned = new Map();
  for (const report of reports) {
    if (counter.get(report[1]) >= k) {
      banned.set(report[0], banned.get(report[0]) + 1 || 1);
    }
  }
  const answer = id_list.map((a) => banned.get(a) || 0);
  return answer;
}

// first case
/*function solution(id_list, report, k) {
    var answer = [];
    const ob_list = {};
    const obj_report = {};
    const banList = [];
    
    id_list.map(id => ob_list[id] = 0);
    console.log(ob_list);
    
    
    const set = new Set(report);
    const arrReport = [...set];
    
    
    const finalReport = arrReport.map(r => r.split(" "));
    console.log(finalReport);
    
    finalReport.map(rep => {
        if(!obj_report[rep[1]]) {
            obj_report[rep[1]] = 1;
        }else if(obj_report[rep[1]]) {
            obj_report[rep[1]] += 1;
        }
    });
    
    Object.keys(obj_report).map(key => {
        if(obj_report[key] >= 2){
            banList.push(key);
        };
    });
    
    arrReport.map(rep => {
        if(banList.includes(rep[1])) {
            ob_list(rep[0]) += 1
        }
    })
    
    answer = Object.values(ob_list)
    return ;
}
*/
