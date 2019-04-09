// strongly type rest parameters
function logScores(...scores: [...number[]]) {
  console.log(scores);
}

logScores(50, 85, 75);

type Scores = [string, ...number[]];
function logNameAndScores(...scores: Scores) {
  console.log(scores);
}

logNameAndScores('Sally', 1, 2);
