export function logScore(score1: number, score2: number, score3: number) {
  console.log(score1 + ', ' + score2 + ', ' + score3);
}

// define tuple of 3 items to remove 'Expected 3 arguments, but got 0 or more' exception
// in logScore(...scores) call
export const scores: [number, number, number] = [75, 65, 80];

logScore(...scores);
