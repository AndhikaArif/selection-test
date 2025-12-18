export type Domino = [number, number];

export const DEFAULT_DOMINOES: Domino[] = [
  [6, 1],
  [4, 3],
  [5, 1],
  [3, 4],
  [1, 1],
  [3, 4],
  [1, 2],
];

export function countDouble(dominoes: Domino[]) {
  return dominoes.filter(([a, b]) => a === b).length;
}

export function sortDominoes(dominoes: Domino[], order: "asc" | "desc") {
  return [...dominoes].sort((a, b) => {
    const totalA = a[0] + a[1];
    const totalB = b[0] + b[1];

    if (totalA !== totalB) {
      return order === "asc" ? totalA - totalB : totalB - totalA;
    }

    // jika total sama, bandingkan index[0] nya, kalau masih sama bandingkan index[1]
    if (a[0] !== b[0]) {
      return order === "asc" ? a[0] - b[0] : b[0] - a[0];
    }

    return order === "asc" ? a[1] - b[1] : b[1] - a[1];
  });
}

export function removeDuplicate(dominoes: Domino[]) {
  const countMap = new Map<string, number>();

  for (const [a, b] of dominoes) {
    const key = `${Math.min(a, b)}-${Math.max(a, b)}`;
    countMap.set(key, (countMap.get(key) || 0) + 1);
  }

  return dominoes.filter(([a, b]) => {
    const key = `${Math.min(a, b)}-${Math.max(a, b)}`;
    return countMap.get(key) === 1;
  });
}

export function flipDominoes(dominoes: Domino[]) {
  return dominoes.map(([a, b]) => [b, a] as Domino);
}

export function removeByTotal(dominoes: Domino[], total: number) {
  return dominoes.filter(([a, b]) => a + b !== total);
}
