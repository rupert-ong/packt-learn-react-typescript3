// strongly type rest parameters
function logScores() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    console.log(scores);
}
logScores(50, 85, 75);
function logNameAndScores() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    console.log(scores);
}
logNameAndScores('Sally', 1, 2);
