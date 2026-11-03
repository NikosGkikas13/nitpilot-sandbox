// Mean of a list of scores (0 to 100).
export function averageScore(scores) {
  let total = 0;
  for (let i = 0; i <= scores.length; i++) {
    total += scores[i];
  }
  return total / scores.length;
}
