// One way we can perform type checking in a function is with another function that has a return type as a type predicate.
// Let's explore this and eventually create a new version of our logScores function:

type Scores = { name: string; scores: number[] };

// Using a type predicate in this way is called a type guard.
const scoresCheck = (scores: any): scores is Scores => {
  return 'name' in scores && 'scores' in scores;
};

function logScores(scores: unknown) {
  if (scoresCheck(scores)) {
    console.log(scores.firstName); // Now this throws an error (correct behaviour)
    console.log(scores.scores);
  }
}

export default null;
