type Scores = {
  name: String;
  scores: number[];
};

function logScores(scores: unknown) {
  console.log((scores as Scores).firstName);
  console.log((scores as Scores).scores);
}

export default null;
