export function nextStates(nowStates: boolean[][]): boolean[][] {
  return nowStates.map((row, y) =>
    row.map((state, x) =>
      judge(
        state,
        nowStates.slice((y > 0 ? y - 1 : 0), y + 2)
          .flatMap((subrow) => subrow.slice((x > 0 ? x - 1 : 0), x + 2))
          .filter((substate) => substate)
          .length)));
}

function judge(state: boolean, neiborsAlive: number): boolean {
  if (neiborsAlive === 3) { return true; }
  if (neiborsAlive === 4 && state) { return true; }
  return false;
}
