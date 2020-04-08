export function random(max: number, min: number = 0): number {
  const value = Math.floor(Math.random() * max);
  return value;
}
