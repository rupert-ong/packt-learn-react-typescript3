type Scores = [number, number?, number?];

const hughScores: Scores = [1];
const samScores: Scores = [1, 2];
const elliotScores: Scores = [1, 2, 3];
// const jillScores: Scores = [1, 2, 3, 4]; // error

function logScoresEnhanced(...scores: Scores) {
  if (scores.length === 3) {
    console.log('Thank you for logging all 3 scores');
  } else {
    console.log(scores);
  }
}

logScoresEnhanced(1, 2);
logScoresEnhanced(1, 2, 3);

export default null;
