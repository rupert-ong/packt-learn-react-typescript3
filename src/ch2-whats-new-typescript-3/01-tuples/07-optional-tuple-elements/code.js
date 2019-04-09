"use strict";
exports.__esModule = true;
var hughScores = [1];
var samScores = [1, 2];
var elliotScores = [1, 2, 3];
// const jillScores: Scores = [1, 2, 3, 4]; // error
function logScoresEnhanced() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    if (scores.length === 3) {
        console.log('Thank you for logging all 3 scores');
    }
    else {
        console.log(scores);
    }
}
logScoresEnhanced(1, 2);
logScoresEnhanced(1, 2, 3);
exports["default"] = null;
