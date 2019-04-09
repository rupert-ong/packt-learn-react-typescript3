// Any does not do any type checking, so this passes, even though it logs undefined
function logScores(scores: any) {
  console.log(scores.firstName);
  console.log(scores.scores);
}

logScores({
  name: 'Billy',
  scores: [10, 40, 83]
});
