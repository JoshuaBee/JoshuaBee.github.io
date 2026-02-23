export const round = (value: number, precision = 3): number => {
  return parseFloat(value.toFixed(precision));
}

export const clamp = (value: number, min = 0, max = 100): number => {
  return Math.min(Math.max(value, min), max);
}
