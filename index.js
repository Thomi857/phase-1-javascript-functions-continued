// code your solution here
function saturdayFun(){
    return "This Saturday, I want to drive.!";  
}
saturdayFun();
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun();
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();
function mondayWork(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
}
mondayWork();
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 